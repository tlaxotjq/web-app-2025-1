import { createRoot } from 'react-dom/client'
import styled from 'styled-components'
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'

import LeftNav from './jsx/NavLeft.jsx'

import MainPage from './jsx/PageMain.jsx'
import PostWritePage from './jsx/PagePostWrite.jsx'
import PostViewPage from './jsx/PagePostView.jsx'
import React, { useState } from 'react'
import { UserContextProvider } from './userContext.jsx'; // UserContext import
import { Fragment } from 'react'

const StyledWrapper =styled.div`
  margin-left: 60px;
  box-sizing: border-box;
  padding: 0px 20px;
  width: calc(100vw - 60px);
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
`


createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <HashRouter>
      <StyledWrapper>
        <Routes>
        <Route index element={<MainPage></MainPage>} />
        <Route path="write" element={<PostWritePage ></PostWritePage>} />
        <Route path="post/:id" element={<PostViewPage></PostViewPage>} />
        </Routes>
      </StyledWrapper>
    </HashRouter>
    </UserContextProvider>
)
