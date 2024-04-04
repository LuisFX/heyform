import { BullModule } from '@nestjs/bull'

import { BullOptionsFactory } from '@config'

import { FormReportQueue } from './form-report.queue'
import { MailQueue } from './mail.queue'
import { IntegrationEmailQueue } from './integration-email.queue'
import { IntegrationWebhookQueue } from './integration-webhook.queue'

export const QueueProviders = {
  FormReportQueue,
  MailQueue,
  IntegrationEmailQueue,
  IntegrationWebhookQueue
}

export const QueueModules = Object.keys(QueueProviders).map(queueName => {
  return BullModule.registerQueueAsync({
    name: queueName,
    useFactory: BullOptionsFactory
  })
})
