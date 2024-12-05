import React from 'react';

interface InstagramEmbedProps {
    url: string; // Instagram post URL
    title: string; // Title for accessibility
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url, title }) => {
    return (
        <iframe
            src={`${url}embed`}
            style={{
                border: 'none',
                overflow: 'hidden',
                borderRadius: '8px',
                width: '100%',
                height: '400px',
            }}
            allowTransparency={true}
            title={title}
        ></iframe>
    );
};

export default InstagramEmbed;
