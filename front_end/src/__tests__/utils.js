import { render } from '@testing-library/react'
import { rest } from 'msw'
import * as React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query';

export const handlers = [
    rest.get(
        '*/api/photographers/*',
        (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                        "id": 4072,
                        "uid": "c7204a53-77be-4ba6-b446-8f92921060a0",
                        "password": "uDQXExV6pr",
                        "first_name": "Lorenzo",
                        "last_name": "Fay",
                        "username": "lorenzo.fay",
                        "email": "lorenzo.fay@email.com",
                        "avatar": "https://robohash.org/autconsecteturlabore.png?size=300x300&set=set1",
                        "gender": "Polygender",
                        "phone_number": "+503 758-280-5371 x9138",
                        "social_insurance_number": "770448660",
                        "date_of_birth": "1993-01-18",
                        "event_type": {
                            "type": ["wedding", "bridal showers","food","sports"]
                        },
                        "address": {
                            "city": "Noemouth",
                            "street_name": "Eusebio Point",
                            "street_address": "4999 Alfredia Station",
                            "zip_code": "71586",
                            "state": "Arizona",
                            "country": "United States",
                            "coordinates": {
                                "lat": -63.81164074947457,
                                "lng": 119.54873167874729
                            }
                        },
                        "credit_card": {
                            "cc_number": "4425-3666-4612-3889"
                        },
                        "subscription": {
                            "plan": "Platinum",
                            "status": "Blocked",
                            "payment_method": "Alipay",
                            "term": "Full subscription"
                        }
                    
                })
            )
        }
    )
]

const createTestQueryClient = () => new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
    logger: {
        log: console.log,
        warn: console.warn,
        error: () => {},
    }
})


export function renderWithClient(ui) {
    const testQueryClient = createTestQueryClient()
    const { rerender, ...result } = render(
        <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
    )
    return {
        ...result,
        rerender: (rerenderUi) =>
            rerender(
                <QueryClientProvider client={testQueryClient}>{rerenderUi}</QueryClientProvider>
            ),
    }
}

export function createWrapper() {
    const testQueryClient = createTestQueryClient()
    return ({ children }) => (
        <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
    )
}

describe('Check React Query', () => {
    it("Should run on each test", () => {
        expect(true).toEqual(true);
    })
})
