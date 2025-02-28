import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import EmailTemplate from '@/components/common/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, name, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Rikhil Rai Portfolio <onboarding@resend.dev>',
      to: ['rabinyen@gmail.com'],
      subject: `Message from - ${email}`,
      react: await EmailTemplate({ name, message }), // Pass props to template
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
