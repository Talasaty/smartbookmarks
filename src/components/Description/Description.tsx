import * as React from 'react'
import { styled } from '$utils/theme/themeStyledComponents';

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex-grow: 1;

  margin: ${p => p.theme.sizes.tiny};
`

interface Props {
  DescriptionText: string
}

export const Description: React.SFC<Props> = ({ DescriptionText }) => (
  <DescriptionContainer>{DescriptionText.substr(0, 60)}</DescriptionContainer>
)
