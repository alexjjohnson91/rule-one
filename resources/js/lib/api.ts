import axios from 'axios';
import { z } from 'zod';

import {
    companySchema,
    type Company,
    type UpdateCompanyInput,
} from '@/schemas/company';

// Configure axios
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';

// Helper function to validate API responses
function validateResponse<T>(schema: z.ZodSchema<T>, data: unknown): T {
    return schema.parse(data);
}

export const api = {
    companies: {
        getAll: async (): Promise<Company[]> => {
            const { data } = await axios.get('/api/companies');
            return z.array(companySchema).parse(data);
        },

        getOne: async (ticker: string): Promise<Company> => {
            const { data } = await axios.get(`/api/companies/${ticker}`);
            return validateResponse(companySchema, data);
        },

        update: async (
            ticker: string,
            input: Partial<UpdateCompanyInput>,
        ): Promise<Company> => {
            const { data } = await axios.put(`/api/companies/${ticker}`, input);
            return validateResponse(companySchema, data);
        },

        delete: async (ticker: string): Promise<void> => {
            await axios.delete(`/api/companies/${ticker}`);
        },
    },
};
