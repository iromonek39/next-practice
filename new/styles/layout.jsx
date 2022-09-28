export const SpaceBetween = `
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SideBySide = `
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const SideBySideCenter = `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`
