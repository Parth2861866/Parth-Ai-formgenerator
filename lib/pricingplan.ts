
export type PricingPlan = {
    level:string;
    price:string;
    services:string[]
}

export const pricingPlan : PricingPlan[] = [
{
    level:"Free",
    price:"$0/month",
    services:[
        "3 Free Credits",
        "Basic Support",
        "Limited Features",
        "No Community Access"

    ]
},
{
    level:"Professional",
    price:"$29/month",
    services:[
        "Unlimited Credits",
        "24/7 Support",
        "Limited Features",
        "Community Access"

    ]
},
{
    level:"Enterprise",
    price:"$70/month",
    services:[
        "Unlimited Credits",
        "24/7 Support",
        "Unlimited Features",
        "Community Access",
        "Monthly Updates"

    ]
}

]
