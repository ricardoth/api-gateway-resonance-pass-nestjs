import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NotificationsService } from './notifications.service';
import { HttpClientService } from 'src/http-client/http-client.service';
import { MercadoPagoNotificationDto } from './dto/mercado-pago-notification.dto';

const mockNotificationDto: MercadoPagoNotificationDto = {
  id: 1,
  liveMode: true,
  type: 'payment',
  dateCreated: new Date('2024-01-01'),
  userId: 'user-123',
  action: 'payment.created',
  data: { id: 'payment-456' },
};

const mockHttpClient = {
  post: jest.fn(),
};

const mockConfigService = {
  get: jest.fn((key: string) => {
    const config: Record<string, string> = {
      urlApiPagos: 'http://pagos-service/',
      userPagosBasicAuth: 'testUser',
      passPagosBasicAuth: 'testPass',
    };
    return config[key];
  }),
};

describe('NotificationsService', () => {
  let service: NotificationsService;

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationsService,
        { provide: HttpClientService, useValue: mockHttpClient },
        { provide: ConfigService, useValue: mockConfigService },
      ],
    }).compile();

    service = module.get<NotificationsService>(NotificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should call httpClient.post with the correct URL, body and Basic Auth header', async () => {
      mockHttpClient.post.mockResolvedValue('OK');

      await service.create(mockNotificationDto);

      const expectedUrl = 'http://pagos-service/Notification';
      const expectedCredentials = Buffer.from('testUser:testPass').toString('base64');

      expect(mockHttpClient.post).toHaveBeenCalledTimes(1);
      expect(mockHttpClient.post).toHaveBeenCalledWith(
        expectedUrl,
        mockNotificationDto,
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: `Basic ${expectedCredentials}`,
          }),
        }),
      );
    });

    it('should return the response from the microservice', async () => {
      const microserviceResponse = { success: true, notificationId: 'notif-789' };
      mockHttpClient.post.mockResolvedValue(microserviceResponse);

      const result = await service.create(mockNotificationDto);

      expect(result).toEqual(microserviceResponse);
    });

    it('should throw BadRequestException when microservice returns 400', async () => {
      const error = { status: 400, message: 'Bad Request from microservice' };
      mockHttpClient.post.mockRejectedValue(error);

      await expect(service.create(mockNotificationDto)).rejects.toThrow(BadRequestException);
    });

    it('should throw NotFoundException when microservice returns 404', async () => {
      const error = { status: 404, message: 'Not Found from microservice' };
      mockHttpClient.post.mockRejectedValue(error);

      await expect(service.create(mockNotificationDto)).rejects.toThrow(NotFoundException);
    });

    it('should throw InternalServerErrorException for unexpected errors', async () => {
      const error = { status: 500, message: 'Internal error' };
      mockHttpClient.post.mockRejectedValue(error);

      await expect(service.create(mockNotificationDto)).rejects.toThrow(InternalServerErrorException);
    });

    it('should throw InternalServerErrorException for errors without a status', async () => {
      const error = new Error('Network failure');
      mockHttpClient.post.mockRejectedValue(error);

      await expect(service.create(mockNotificationDto)).rejects.toThrow(InternalServerErrorException);
    });
  });
});
