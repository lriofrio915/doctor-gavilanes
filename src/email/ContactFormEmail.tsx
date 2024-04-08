import React from "react";
import {
    Html,
    Body,
    Head,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";
import { ContactFormEmailProps } from "~/shared/types";

const ContactFormEmail = ({ name, number, textarea }: ContactFormEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Un nuevo correo del pacien...</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                            <Text style={{ fontSize: '24px', fontWeight: 'bold', lineHeight: '1.5' }}>
                                Su Consultorio Online
                            </Text>
                            <Text>El paciente {name} dice:</Text>
                            <Text>{textarea}</Text>
                            <Hr />
                            <Text>Mi telefono de contacto es: {number}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default ContactFormEmail