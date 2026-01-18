import { Head } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import { show } from '@/routes/projections';
import { type BreadcrumbItem } from '@/types';
import { type Company } from '@/types/projections';

interface ShowProps {
    company: Company;
}

export default function Company({ company }: ShowProps) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: company.ticker,
            href: show(company.ticker).url,
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={company.ticker} />
        </AppLayout>
    );
}
