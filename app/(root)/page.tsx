import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = {firstName:'Chris'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
        <HeaderBox 
        type="greeting"
        title="Welcome"
        user={loggedIn?.firstName || 'Guest'}
        subtext="Simplify Access and Control Over Your Account and Transactions"
        />
        <TotalBalanceBox 
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.35}
        />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[]}
      />

    </section>
  )
}

export default Home