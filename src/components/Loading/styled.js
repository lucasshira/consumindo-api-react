import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingIndicator = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #3498db;
  border-top: 3px solid #ffffff;
  animation: ${spin} 1s linear infinite;
  margin-left: 5px;
`;

export const MainContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const LoadingText = styled.span`
  z-index: 2;
`;
