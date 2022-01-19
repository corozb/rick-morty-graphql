import { ReactNode } from 'react'

type FontSize = 'small' | 'medium' | 'large'
type FontVariant = 'body' | 'heading'
type FontColor = 'white' | 'grey'

type Props = {
  variant?: FontVariant
  size?: FontSize
  color: FontColor
  children: ReactNode
}

const SizesInPx = {
  small: 16,
  medium: 18,
  large: 20,
}

const FontWeights = {
  body: 500,
  heading: 800,
}

const FontColors = {
  white: '#fff',
  grey: '#9e9e9e',
}

const defaultStyles = {
  margin: 0,
  display: 'flex',
  alignItems: 'center',
}

const Typography = ({ variant = 'body', size = 'medium', color: fontColor, children }: Props) => {
  const Element = variant === 'heading' ? 'h3' : 'span'
  const fontSize = SizesInPx[size]
  const fontWeight = FontWeights[variant]
  const color = FontColors[fontColor]

  const style = {
    ...defaultStyles,
    fontSize,
    fontWeight,
    color,
  }

  return <Element style={style}>{children}</Element>
}

export default Typography
