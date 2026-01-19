// resources/js/schemas/company.ts
import { z } from 'zod';

export const companySchema = z.object({
    id: z.number(),
    ticker: z.string().max(10),
});

// For updating a company (all fields optional except ticker)
export const updateCompanySchema = companySchema.partial().required({
    ticker: true,
});

// TypeScript types from schemas
export type Company = z.infer<typeof companySchema>;
export type UpdateCompanyInput = z.infer<typeof updateCompanySchema>;
