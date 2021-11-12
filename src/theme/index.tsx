import { extendTheme, theme as base, useColorModeValue } from "@chakra-ui/react"



const theme = extendTheme(
    {
        fonts:
        {
            heading: `Ubuntu, sans-serif, ${base.fonts?.heading}`,
            body: `Ubuntu, sans-serif, ${base.fonts?.body}`,
        },
        components:
        {
            Button:
            {
                baseStyle:
                {
                    borderRadius: "full",
                    _focus:
                    {
                        ring: 3,
                        ringColor: 'purple.700',
                    },
                },
            },
        }
    }
);

export default theme;