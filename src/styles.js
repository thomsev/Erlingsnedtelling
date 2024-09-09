import styled from "styled-components";
export const CountdownContainer = styled.div `
  display: inline-grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-auto-flow: row;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    gap: 0.5rem;
    text-align: center;
  }
`;
export const CountdownWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;
export const Part = styled.div `
  display: grid;
  gap: 0.5rem;
  justify-items: center;
`;
export const Number = styled.div `
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid hsl(0, 0%, 50% / 0.5);
  font-size: 3rem;
  font-weight: bold;
  position: relative;
  padding: 1.5rem;
  background-color: ${({ accent }) => accent};
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
export const Text = styled.div `
  text-align: center;
  font-size: 1.5rem;
  color: white;
  shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
export const PageContainer = styled.div `
  background: linear-gradient(135deg, #b5e48c, #52b69a);
  color: #fefefe;
  font-family: system-ui, sans-serif;
  min-height: 100vh; /* Fullscreen height */
  width: 100vw; /* Fullscreen width */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;
  overflow: hidden; /* Prevent scrolling */
`;
export const Heading = styled.h1 `
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: bold;
  color: #fefefe;
  shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const SubHeading = styled.h2 `
  font-size: 2rem;
  color: #fefefe;
  margin: 2rem 0 1rem;
  shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
