import React from 'react';
import { AspectRatio } from '@chakra-ui/react';

export default function Map() {
    return (
        <AspectRatio ratio={16 / 9} maxW="100%">
            <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d-117.2861493!3d49.4928127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537df9c18f0b37e9%3A0xe84303b0a2251d14!2sNelson%2C%20BC%2C%20Canad%C3%A1!5e0!3m2!1ses!2s!4v1626238509817!5m2!1ses!2s"
                style={{ border: 0 }}
            />
        </AspectRatio>
    );
}

