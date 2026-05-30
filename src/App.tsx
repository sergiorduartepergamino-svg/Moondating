/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Profile from './Profile';
import Register from './Register';
import Login from './Login';
import Matches from './Matches';
import BottomNav from './BottomNav';

function PlaceholderScreen({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#110A1F] via-[#2A0E38] to-[#C1106A] flex justify-center items-center font-sans w-full relative">
      <h1 
          className="text-[2.2rem] leading-tight font-heading font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#F4D068] to-[#996515] drop-shadow-[0_2px_1px_rgba(0,0,0,0.5)]"
          style={{ WebkitTextStroke: '0.5px #A87A1E' }}
      >
          {title}
      </h1>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<'register' | 'profile' | 'login' | 'matches' | 'chat' | 'likes'>('register');

  const showNav = ['matches', 'profile', 'chat', 'likes'].includes(screen);

  return (
    <div className="w-full h-full min-h-screen bg-black flex justify-center relative">
      <div className="w-full max-w-[420px] relative h-full flex flex-col items-center">
        {screen === 'register' ? (
          <Register 
            onNext={() => setScreen('profile')} 
            onLoginClick={() => setScreen('login')}
          />
        ) : screen === 'login' ? (
          <Login 
            onBack={() => setScreen('register')} 
            onLogin={() => setScreen('matches')} 
          />
        ) : screen === 'profile' ? (
          <Profile 
            onBack={() => setScreen('register')} 
            onSave={() => setScreen('matches')}
          />
        ) : screen === 'matches' ? (
          <Matches onBack={() => setScreen('profile')} />
        ) : screen === 'chat' ? (
          <PlaceholderScreen title="Chats" />
        ) : screen === 'likes' ? (
          <PlaceholderScreen title="Tus Matches" />
        ) : null}

        {showNav && <BottomNav active={screen} onNavigate={(s: any) => setScreen(s)} />}
      </div>
    </div>
  );
}
