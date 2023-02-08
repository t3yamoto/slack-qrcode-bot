import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as SlackQRCodeBot from '../lib/slack-qrcode-bot-stack';

test('SQS Queue Created', () => {
  const app = new cdk.App();
  // when
  const stack = new SlackQRCodeBot.SlackQRCodeBotStack(app, 'MyTestStack');
  // then
  const template = Template.fromStack(stack);
  template.resourceCountIs('AWS::SQS::Queue', 1);
});
