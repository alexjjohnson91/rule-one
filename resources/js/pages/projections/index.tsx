import { Head, router, useForm } from '@inertiajs/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { projections } from '@/routes';
import { show } from '@/routes/projections';
import { type BreadcrumbItem } from '@/types';
import { type Company } from '@/types/projections';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projections',
        href: projections().url,
    },
];

interface ProjectionIndexProps {
    companies: Company[];
}

export default function Projections({ companies }: ProjectionIndexProps) {
    const [ticker, setTicker] = useState('');
    const [revenue, setRevenue] = useForm('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (ticker.trim()) {
            // Navigate to the ticker page
            router.visit(show.url(ticker.toUpperCase()));
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projections" />
            {/* Ticker Input Form */}
            <div className="mb-6">
                <form onSubmit={handleSubmit} className="flex max-w-md gap-2">
                    <Input
                        type="text"
                        placeholder="Enter ticker symbol"
                        value={ticker}
                        onChange={(e) => setTicker(e.target.value)}
                        className="flex-1"
                    />
                    <Button type="submit">Get Projections</Button>
                </form>
            </div>

            {companies.map((company) => {
                return <div key={company.ticker}>{company.ticker}</div>;
            })}
        </AppLayout>
    );
}
