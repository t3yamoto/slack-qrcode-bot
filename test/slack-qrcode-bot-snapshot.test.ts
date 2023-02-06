import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { SlackQRCodeBotStack } from '../lib/slack-qrcode-bot-stack';

test('Snapshot test', () => {
  const app = new cdk.App();
  const stack = new SlackQRCodeBotStack(app, 'SlackQRCodeBotStack');
  const template = Template.fromStack(stack).toJSON();
  expect(template).toMatchSnapshot();
});
