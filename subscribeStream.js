
import StreamrClient from 'streamr-client';
import dotenv from 'dotenv';

dotenv.config();

const streamr = new StreamrClient({
    auth: {
        privateKey: process.env.PRIVATE_KEY,
    }
})

// Subscribe to a stream of messages
streamr.subscribe('0xefb879c8d74628d68ad7e563f5a281b35d61ec92/livesportodds', (msg) => {
    console.log(msg)
})