// theme.js
import { extendTheme } from '@chakra-ui/react'

// Version 1: Using objects
export const theme = extendTheme({
  colors: {
    backgroundDark: '#1F1B24',
    textDefault: 'white'
  },
  styles: {
    global: {
      body: {
        bg: '#1F1B24',
        color: 'white'
      }
    }
  }
})
