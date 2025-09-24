'use server';

/**
 * @fileOverview Accident detection and alert flow.
 *
 * - detectAccidentAndAlert - Detects accidents using AI and alerts emergency services.
 * - DetectAccidentAndAlertInput - The input type for the detectAccidentAndAlert function.
 * - DetectAccidentAndAlertOutput - The return type for the detectAccidentAndAlert function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DetectAccidentAndAlertInputSchema = z.object({
  sensorData: z.string().describe('Data from the car sensors.'),
  locationData: z.string().describe('The location data of the car.'),
  heartRate: z.number().describe('The heart rate of the driver.'),
  spo2: z.number().describe('The SpO2 of the driver.'),
  bloodPressure: z.string().describe('The blood pressure of the driver.'),
  emergencyContacts: z.string().describe('The emergency contacts of the driver.'),
});
export type DetectAccidentAndAlertInput = z.infer<typeof DetectAccidentAndAlertInputSchema>;

const DetectAccidentAndAlertOutputSchema = z.object({
  isAccident: z.boolean().describe('Whether or not an accident has occurred.'),
  alertMessage: z.string().describe('The message to send to emergency services.'),
});
export type DetectAccidentAndAlertOutput = z.infer<typeof DetectAccidentAndAlertOutputSchema>;

export async function detectAccidentAndAlert(input: DetectAccidentAndAlertInput): Promise<DetectAccidentAndAlertOutput> {
  return detectAccidentAndAlertFlow(input);
}

const prompt = ai.definePrompt({
  name: 'detectAccidentAndAlertPrompt',
  input: {schema: DetectAccidentAndAlertInputSchema},
  output: {schema: DetectAccidentAndAlertOutputSchema},
  prompt: `You are an AI assistant that detects car accidents and alerts emergency services.

You will receive data from the car sensors, location data, and the driver's vital signs. You will use this information to determine if an accident has occurred.

If an accident has occurred, you will generate a message to send to emergency services with the location of the accident and the driver's vital signs.

Sensor Data: {{{sensorData}}}
Location Data: {{{locationData}}}
Heart Rate: {{{heartRate}}}
SpO2: {{{spo2}}}
Blood Pressure: {{{bloodPressure}}}
Emergency Contacts: {{{emergencyContacts}}}

Is Accident: {{isAccident}}
Alert Message: {{alertMessage}}`,
});

const detectAccidentAndAlertFlow = ai.defineFlow(
  {
    name: 'detectAccidentAndAlertFlow',
    inputSchema: DetectAccidentAndAlertInputSchema,
    outputSchema: DetectAccidentAndAlertOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
