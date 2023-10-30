import React, { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { Wifi } from 'react-feather';
import { Group, Progress } from '@mantine/core';

export default function Ping() {
    const [ping, setPing] = useState(0);

    const pingInterval = 3000; // 3 saniye

    const measurePing = async () => {
        try {
            const pingResult = await invoke('measure_ping');
            setPing(pingResult); // Ping sonucunu güncelle
        } catch (error) {
            console.error(`Ping measurement failed: ${error}`);
        }
    };

    useEffect(() => {
        // İlk ping ölçümünü yap
        measurePing();

        // Ardından belirli aralıklarla ping ölçümünü güncelle
        const intervalId = setInterval(measurePing, pingInterval);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <Group style={{marginBottom: 10}}>
                <Wifi style={{ color: '#1bd14c' }} />
                <div>Ping: {ping} ms</div>
            </Group>
            <Progress color="green" value={ping} />
        </div>
    );
}