import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        color: 'accent.default',
        _hover: {
          filter: 'brightness(120%)',
          textDecoration: 'none'
        }
      }
    }
  },
  colors: {
    accent: {
      50: 'hsla(327, 76%, 64%, 0.05)',
      100: 'hsla(327, 76%, 64%, 0.1)',
      200: 'hsla(327, 76%, 64%, 0.2)',
      300: 'hsla(327, 76%, 64%, 0.3)',
      400: 'hsla(327, 76%, 64%, 0.4)',
      500: 'hsla(327, 76%, 64%, 0.5)',
      600: 'hsla(327, 76%, 64%, 0.6)',
      700: 'hsla(327, 76%, 64%, 0.7)',
      800: 'hsla(327, 76%, 64%, 0.8)',
      900: 'hsla(327, 76%, 64%, 0.9)',
      default: 'hsla(327, 76%, 64%, 1)'
    }
  }
})
export default theme
