export default function Tabs({ children, buttons, buttonContainer = 'menu'}) {
    const ButtonContainer = buttonContainer
  return (
    <>
        {/* <buttonContainer>{buttons}</buttonContainer> this will search for inbuilt tag which is wrong. Use Uppercase in pass as parameter or do remaped */}
      <ButtonContainer>{buttons}</ButtonContainer> 
      {children}
    </>
  );
}
