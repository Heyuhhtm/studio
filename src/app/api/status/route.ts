import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    status: "CRITICAL",
    patient_info: {
      name: "Alex Doe",
      blood_type: "O+",
      pre_existing_conditions: "None",
      emergency_contact: "+1-123-456-7890",
    },
    last_data: {
      location: {
        lat: 34.0522,
        lon: -118.2437,
      },
      impact: {
        g_force: 5.2,
      },
      environment: {
        in_car_motion: false,
        is_voice_detected: true,
      },
      manual_override: {
        sos_button_pressed: true,
      },
    },
    emergency_details: {
      services_alerted: {
        hospital: {
          name: "City General Hospital",
        },
        police: {
          name: "LAPD Central Division",
        },
      },
    },
  };

  return NextResponse.json(data);
}
