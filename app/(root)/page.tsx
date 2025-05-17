import React from 'react'
import HeaderBox from '@/components/UI/HeaderBox';
import TotalBalanceBox from '@/components/UI/TotalBalanceBox';

const Dashboard = () => {
  const loggedIn = {firstName: "Isabella"};

  return (
    <section className="home">Dashboard
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
        </header>

        <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250}
        />
      </div>
    </section>
  )
}
export default Dashboard;