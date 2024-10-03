interface Section {
    section: string;
    pairs: Pair[];
}

interface Pair {
    topic: string;
    content: string[]
}

const cmsc216 : Section[] = [
    {
        section: "Floating points",
        pairs: [
            {
                topic: "",
                content: [
                    "123.406 = 1x 10^2 + 2x10^1 + 3x 10^0 + 4x10^-1 + 0x10^-2..."
                ]
            },
            {
                topic: "Base 2, binary point",
                content: [
                    "110101 = 1x2^2 + 1x2^1 + 0x2^0 ..."
                ]
            },
            {
                topic: "Scientific notation",
                content: [
                    "Standard, Scientific, printf(\"%.4e\", x)",
                    "123.456, 1.23456 x 10^2, 1.23456e+02"
                ]
            },
            {
                topic: "",
                content: [
                    
                ]
            },
            {
                topic: "",
                content: [
                    
                ]
            },
            {
                topic: "",
                content: [
                    
                ]
            },
            {
                topic: "",
                content: [
                    
                ]
            }
        ]
    }
]