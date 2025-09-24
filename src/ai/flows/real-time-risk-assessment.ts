'use server';
/**
 * @fileOverview Assesses real-time risk based on vitals and location data.
 *
 * - assessRealTimeRisk - A function that assesses real-time risk and triggers alerts if necessary.
 * - RealTimeRiskInput - The input type for the assessRealTimeRisk function.
 * - RealTimeRiskOutput - The return type for the assessRealTimeRisk function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RealTimeRiskInputSchema = z.object({
  heartRate: z.number().describe('The current heart rate of the user in BPM.'),
  spo2: z.number().describe('The current SpO2 level of the user as a percentage.'),
  bloodPressure: z.string().describe('The current blood pressure of the user in mmHg (e.g., 120/80).'),
  latitude: z.number().describe('The latitude of the user.'),
  longitude: z.number().describe('The longitude of the user.'),
  vehicleId: z.string().optional().describe('The Vehicle ID if available.'),
});
export type RealTimeRiskInput = z.infer<typeof RealTimeRiskInputSchema>;

const RealTimeRiskOutputSchema = z.object({
  riskLevel: z.enum(['low', 'medium', 'high']).describe('The assessed risk level.'),
  advice: z.string().describe('Advice for the user based on the risk level.'),
  alertEmergencyServices: z.boolean().describe('Whether emergency services should be alerted.'),
  reason: z.string().describe('The reason for the risk level assessment.'),
});
export type RealTimeRiskOutput = z.infer<typeof RealTimeRiskOutputSchema>;

export async function assessRealTimeRisk(input: RealTimeRiskInput): Promise<RealTimeRiskOutput> {
  return assessRealTimeRiskFlow(input);
}

const prompt = ai.definePrompt({
  name: 'realTimeRiskPrompt',
  input: {schema: RealTimeRiskInputSchema},
  output: {schema: RealTimeRiskOutputSchema},
  prompt: `You are an AI assistant that analyzes real-time health and location data to assess the risk level of a user.

  Based on the following information, determine the riskLevel (low, medium, or high), provide advice to the user, and determine if emergency services should be alerted.

  Heart Rate: {{{heartRate}}} BPM
  SpO2: {{{spo2}}}%
  Blood Pressure: {{{bloodPressure}}}
  Latitude: {{{latitude}}}
  Longitude: {{{longitude}}}
  Vehicle ID: {{{vehicleId}}}

  Respond in JSON format.
  `,
});

const assessRealTimeRiskFlow = ai.defineFlow(
  {
    name: 'assessRealTimeRiskFlow',
    inputSchema: RealTimeRiskInputSchema,
    outputSchema: RealTimeRiskOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
