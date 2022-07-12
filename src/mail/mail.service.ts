import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async send() {
    await this.mailerService.sendMail({
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Teste envio de email',
      template: 'test',
      context: {
        message: 'Teste envio de email do nest.js',
      },
      to: ['email@test.com'],
    });
  }
}
