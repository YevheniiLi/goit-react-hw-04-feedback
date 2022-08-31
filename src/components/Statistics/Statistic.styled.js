import styled from 'styled-components';

export const ReviewList = styled.ul`
  text-align: center;
  padding-left: ${p => p.theme.space[5]}px;
`;

export const ReviewItem = styled.li`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.secondaryText};
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;
export const ReviewName = styled.span`
  padding-left: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.primaryText};
`;
