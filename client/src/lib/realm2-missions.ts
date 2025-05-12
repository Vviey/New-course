// Data for Realm 2 missions

export interface Realm2MissionData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  simulationType: 'surveillance' | 'privacy' | 'cbdc' | 'bitcoin' | 'lightning' | 'selfcustody';
  simulationData?: any;
  content: string;
}

export const realm2Missions: Realm2MissionData[] = [
  {
    id: 200,
    title: "Financial Surveillance: The Digital Lens",
    subtitle: "Introduction to financial surveillance and privacy concerns",
    description: "Learn the fundamentals of financial surveillance, its real-world applications, and why privacy matters.",
    simulationType: 'surveillance',
    content: `
      <div style="background-color: rgba(255, 204, 0, 0.1); border: 1px solid rgba(255, 204, 0, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <h2 style="color: #FFA500; margin-top: 0;">What is Financial Surveillance?</h2>
        <p>The monitoring and tracking of financial transactions and activities by governments, corporations, or other entities.</p>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 16px;">
          <div style="background-color: rgba(0, 0, 0, 0.2); border-radius: 6px; padding: 12px;">
            <h4 style="color: #FFCC00; margin-top: 0;">What They Track</h4>
            <ul>
              <li>Senders & recipients</li>
              <li>Account balances</li>
              <li>Purchase history</li>
              <li>Transaction times & locations</li>
            </ul>
          </div>
          <div style="background-color: rgba(0, 0, 0, 0.2); border-radius: 6px; padding: 12px;">
            <h4 style="color: #FFCC00; margin-top: 0;">Who Does The Tracking</h4>
            <ul>
              <li>Government agencies</li>
              <li>Financial institutions</li>
              <li>Payment processors</li>
              <li>Tech platforms</li>
            </ul>
          </div>
        </div>
      </div>

      <div style="background-color: rgba(255, 204, 0, 0.1); border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <h2 style="color: #FFA500; margin-top: 0;">Case Study: M-Pesa in Kenya</h2>
        
        <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
          <div style="flex: 1;">
            <h3 style="color: #FFCC00;">Mobile Money Revolution</h3>
            <p>Launched in 2007, M-Pesa allows Kenyans to deposit, withdraw, transfer money, pay bills, and access loans via mobile phones.</p>
          </div>
          <div style="background-color: rgba(255, 255, 255, 0.1); border-radius: 100%; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
            📱
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div style="background-color: rgba(0, 180, 0, 0.1); border-radius: 6px; padding: 12px;">
            <h4 style="color: #4CAF50; margin-top: 0;">Benefits</h4>
            <ul>
              <li>Financial inclusion</li>
              <li>Reduced cash crime</li>
              <li>Economic growth</li>
              <li>Easy remittances</li>
            </ul>
          </div>
          <div style="background-color: rgba(180, 0, 0, 0.1); border-radius: 6px; padding: 12px;">
            <h4 style="color: #F44336; margin-top: 0;">Privacy Concerns</h4>
            <ul>
              <li>All transactions logged</li>
              <li>Reveals personal habits</li>
              <li>Government access</li>
              <li>Potential restrictions</li>
            </ul>
          </div>
        </div>
      </div>

      <div style="background-color: rgba(255, 204, 0, 0.1); border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <h2 style="color: #FFA500; margin-top: 0;">Why Financial Privacy Matters</h2>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 16px;">
          <div style="text-align: center; background-color: rgba(0, 0, 0, 0.2); border-radius: 6px; padding: 12px;">
            <div style="font-size: 24px; margin-bottom: 8px;">🛡️</div>
            <h4 style="color: #FFCC00; margin: 0 0 8px 0;">Personal Autonomy</h4>
            <p style="font-size: 12px; margin: 0;">Make economic choices without judgment</p>
          </div>
          <div style="text-align: center; background-color: rgba(0, 0, 0, 0.2); border-radius: 6px; padding: 12px;">
            <div style="font-size: 24px; margin-bottom: 8px;">⚖️</div>
            <h4 style="color: #FFCC00; margin: 0 0 8px 0;">Anti-Discrimination</h4>
            <p style="font-size: 12px; margin: 0;">Prevent unfair treatment</p>
          </div>
          <div style="text-align: center; background-color: rgba(0, 0, 0, 0.2); border-radius: 6px; padding: 12px;">
            <div style="font-size: 24px; margin-bottom: 8px;">🔒</div>
            <h4 style="color: #FFCC00; margin: 0 0 8px 0;">Safety</h4>
            <p style="font-size: 12px; margin: 0;">Protection from targeting</p>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
          <div style="text-align: center; background-color: rgba(0, 0, 0, 0.2); border-radius: 6px; padding: 12px;">
            <div style="font-size: 24px; margin-bottom: 8px;">💼</div>
            <h4 style="color: #FFCC00; margin: 0 0 8px 0;">Business Confidentiality</h4>
            <p style="font-size: 12px; margin: 0;">Protect sensitive operations</p>
          </div>
          <div style="text-align: center; background-color: rgba(0, 0, 0, 0.2); border-radius: 6px; padding: 12px;">
            <div style="font-size: 24px; margin-bottom: 8px;">🛑</div>
            <h4 style="color: #FFCC00; margin: 0 0 8px 0;">Avoid Manipulation</h4>
            <p style="font-size: 12px; margin: 0;">Prevent exploitation</p>
          </div>
        </div>
      </div>

      <div style="background-color: rgba(255, 204, 0, 0.1); border-radius: 8px; padding: 16px;">
        <h2 style="color: #FFA500; margin-top: 0;">The Privacy Paradox</h2>
        
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
          <div style="flex: 1; padding-right: 16px;">
            <p>Digital payment systems create unprecedented financial inclusion while simultaneously establishing comprehensive surveillance infrastructure.</p>
          </div>
          <div style="background-color: rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 12px; text-align: center; min-width: 100px;">
            <div style="font-size: 24px;">⚖️</div>
            <div style="font-size: 12px; margin-top: 8px;">Convenience vs. Privacy</div>
          </div>
        </div>
        
        <p style="font-style: italic; text-align: center; border-top: 1px solid rgba(255, 204, 0, 0.3); padding-top: 16px;">
          "This tension - between convenience and privacy, between access and autonomy - forms the central challenge of our modern monetary systems."
        </p>
      </div>
    `
  },
  {
    id: 201,
    title: "The Citadel's Shadows",
    subtitle: "Understanding financial surveillance",
    description: "Learn how centralized monetary systems enable surveillance and financial control.",
    simulationType: 'surveillance',
    content: `
      <div style="position: relative; background-color: rgba(255, 204, 0, 0.05); border-radius: 12px; padding: 20px; margin-bottom: 24px; overflow: hidden;">
        <div style="position: absolute; top: 0; right: 0; width: 150px; height: 150px; background: radial-gradient(circle at top right, rgba(255, 204, 0, 0.2), transparent 70%); z-index: 0;"></div>
        
        <h2 style="color: #FFA500; position: relative; z-index: 1;">Financial Control System</h2>
        
        <div style="display: flex; flex-wrap: wrap; gap: 16px; margin-top: 16px; position: relative; z-index: 1;">
          <div style="flex: 1; min-width: 200px; background-color: rgba(0, 0, 0, 0.2); border-radius: 8px; padding: 16px;">
            <h3 style="color: #FFCC00; margin-top: 0;">Surveillance Methods</h3>
            <ul style="padding-left: 20px;">
              <li>Public financial status displays</li>
              <li>Complete transaction history tracking</li>
              <li>Merchant access to customer data</li>
              <li>Location tracking for all purchases</li>
            </ul>
          </div>
          
          <div style="flex: 1; min-width: 200px; background-color: rgba(0, 0, 0, 0.2); border-radius: 8px; padding: 16px;">
            <h3 style="color: #FFCC00; margin-top: 0;">Control Mechanisms</h3>
            <ul style="padding-left: 20px;">
              <li>"Citizen score" based on spending</li>
              <li>Permission required for large purchases</li>
              <li>Access to services tied to financial behavior</li>
              <li>Economic participation restrictions</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style="background-color: rgba(255, 204, 0, 0.1); border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <h2 style="color: #FFA500; margin-top: 0;">The Privacy Challenge</h2>
        
        <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
          <div style="flex: 1;">
            <p>Some citizens find creative ways to conduct transactions outside the watchful eyes of surveillance systems.</p>
          </div>
          <div style="min-width: 80px; height: 80px; background-color: rgba(0, 0, 0, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px;">
            👁️
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 12px;">
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 6px; padding: 12px; border-left: 3px solid #FFCC00;">
            <h4 style="color: #FFCC00; margin-top: 0; font-size: 14px;">Social Control</h4>
            <p style="font-size: 12px; margin-bottom: 0;">Financial data used to influence behavior</p>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 6px; padding: 12px; border-left: 3px solid #FFCC00;">
            <h4 style="color: #FFCC00; margin-top: 0; font-size: 14px;">Privacy Rights</h4>
            <p style="font-size: 12px; margin-bottom: 0;">Financial privacy as a fundamental right</p>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 6px; padding: 12px; border-left: 3px solid #FFCC00;">
            <h4 style="color: #FFCC00; margin-top: 0; font-size: 14px;">System Tracking</h4>
            <p style="font-size: 12px; margin-bottom: 0;">How financial systems monitor activity</p>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 6px; padding: 12px; border-left: 3px solid #FFCC00;">
            <h4 style="color: #FFCC00; margin-top: 0; font-size: 14px;">Balance</h4>
            <p style="font-size: 12px; margin-bottom: 0;">Transparency vs. privacy tradeoffs</p>
          </div>
        </div>
      </div>
      
      <div style="background-color: rgba(255, 204, 0, 0.07); border-radius: 8px; padding: 16px; text-align: center;">
        <h3 style="color: #FFA500;">Digital Money Privacy Challenge</h3>
        <p>As money becomes increasingly digital, the question of who can see your transactions becomes critically important.</p>
        
        <div style="display: flex; justify-content: center; gap: 30px; margin-top: 16px;">
          <div style="text-align: center;">
            <div style="width: 60px; height: 60px; background-color: rgba(255, 204, 0, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; margin: 0 auto 8px;">
              💰
            </div>
            <div style="font-size: 12px;">Cash = Privacy</div>
          </div>
          
          <div style="text-align: center;">
            <div style="width: 60px; height: 60px; background-color: rgba(255, 204, 0, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; margin: 0 auto 8px;">
              💳
            </div>
            <div style="font-size: 12px;">Digital = Tracking</div>
          </div>
          
          <div style="text-align: center;">
            <div style="width: 60px; height: 60px; background-color: rgba(255, 204, 0, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; margin: 0 auto 8px;">
              ❓
            </div>
            <div style="font-size: 12px;">Future = ?</div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 202,
    title: "Privacy vs Control",
    subtitle: "Balancing transparency and personal privacy",
    description: "Explore the balance between financial transparency and personal privacy.",
    simulationType: 'privacy',
    content: `
      <div style="background-color: rgba(255, 204, 0, 0.1); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 16px;">
          <div style="flex-grow: 1;">
            <h2 style="color: #FFA500; margin-top: 0;">Understanding Financial Privacy</h2>
            <p>Financial privacy is your ability to conduct economic transactions without unwanted third-party surveillance.</p>
          </div>
          <div style="min-width: 70px; height: 70px; background-color: rgba(0, 0, 0, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px;">
            🔒
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div style="background-color: rgba(0, 0, 0, 0.2); border-radius: 8px; padding: 16px;">
            <h3 style="color: #FFCC00; margin-top: 0;">Traditional Cash Privacy</h3>
            <p style="margin-bottom: 12px;">In physical cash transactions, only the buyer and seller know the details.</p>
            <ul style="padding-left: 20px; margin-bottom: 0;">
              <li>What was purchased</li>
              <li>For how much</li>
              <li>By whom</li>
              <li>When and where</li>
            </ul>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.2); border-radius: 8px; padding: 16px;">
            <h3 style="color: #FFCC00; margin-top: 0;">Digital Transaction Records</h3>
            <p style="margin-bottom: 12px;">Electronic payments create permanent records accessible to:</p>
            <ul style="padding-left: 20px; margin-bottom: 0;">
              <li>Banks & payment processors</li>
              <li>Governments</li>
              <li>Marketing companies</li>
              <li>Data brokers & hackers</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style="position: relative; background-color: rgba(255, 204, 0, 0.05); border-radius: 12px; padding: 20px; margin-bottom: 24px; overflow: hidden;">
        <h2 style="color: #FFA500; margin-top: 0;">Africa's Digital Transition</h2>
        
        <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center; margin-bottom: 16px;">
          <div style="flex-grow: 1; min-width: 250px;">
            <p>In Rwanda, the push toward cashless payments through mobile money and cards means nearly all economic activity is now potentially trackable.</p>
          </div>
          <div style="background-color: rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 10px; display: flex; flex-direction: column; align-items: center; min-width: 120px;">
            <div style="font-size: 36px; margin-bottom: 8px;">📱 → 👁️</div>
            <div style="font-size: 13px; text-align: center;">Mobile payments create digital trails</div>
          </div>
        </div>
        
        <p>Traditional African marketplaces operated with cash privacy, but digital systems create unprecedented financial surveillance capability.</p>
      </div>
      
      <div style="background-color: rgba(255, 204, 0, 0.1); border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <h2 style="color: #FFA500; margin-top: 0; text-align: center;">The Balancing Act</h2>
        
        <div style="display: flex; justify-content: center; margin: 16px 0;">
          <div style="width: 60%; height: 8px; background-color: rgba(0, 0, 0, 0.2); border-radius: 4px; position: relative;">
            <div style="position: absolute; left: 0; top: -30px; text-align: center; width: 33.3%;">
              <div style="font-size: 20px;">🔍</div>
              <div style="font-size: 12px;">Complete Transparency</div>
            </div>
            <div style="position: absolute; left: 33.3%; top: -30px; text-align: center; width: 33.3%;">
              <div style="font-size: 20px;">⚖️</div>
              <div style="font-size: 12px;">Reasonable Privacy</div>
            </div>
            <div style="position: absolute; right: 0; top: -30px; text-align: center; width: 33.3%;">
              <div style="font-size: 20px;">🕵️</div>
              <div style="font-size: 12px;">Absolute Privacy</div>
            </div>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 30px;">
          <div style="background-color: rgba(255, 100, 100, 0.15); border-radius: 6px; padding: 12px;">
            <h4 style="color: #FF6B6B; margin-top: 0; font-size: 14px; text-align: center;">Complete Transparency</h4>
            <ul style="padding-left: 20px; font-size: 12px;">
              <li>All transactions public</li>
              <li>All financial details visible</li>
              <li>No financial secrets</li>
            </ul>
          </div>
          
          <div style="background-color: rgba(100, 200, 100, 0.15); border-radius: 6px; padding: 12px;">
            <h4 style="color: #64C864; margin-top: 0; font-size: 14px; text-align: center;">Reasonable Privacy</h4>
            <ul style="padding-left: 20px; font-size: 12px;">
              <li>Details known to participants</li>
              <li>Verification without revealing all</li>
              <li>Oversight with due process</li>
            </ul>
          </div>
          
          <div style="background-color: rgba(100, 100, 255, 0.15); border-radius: 6px; padding: 12px;">
            <h4 style="color: #6464FF; margin-top: 0; font-size: 14px; text-align: center;">Absolute Privacy</h4>
            <ul style="padding-left: 20px; font-size: 12px;">
              <li>No transaction trail</li>
              <li>Completely anonymous</li>
              <li>No possible oversight</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style="background-color: rgba(255, 204, 0, 0.07); border-radius: 8px; padding: 16px;">
        <h2 style="color: #FFA500; margin-top: 0; text-align: center;">Key Questions</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-top: 16px;">
          <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 6px; padding: 12px; display: flex; align-items: center; gap: 10px;">
            <div style="font-size: 24px;">❓</div>
            <div>Who should access your transaction history?</div>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 6px; padding: 12px; display: flex; align-items: center; gap: 10px;">
            <div style="font-size: 24px;">🔐</div>
            <div>Is financial privacy a right or privilege?</div>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 6px; padding: 12px; display: flex; align-items: center; gap: 10px;">
            <div style="font-size: 24px;">🛡️</div>
            <div>How to prevent crimes while respecting privacy?</div>
          </div>
          
          <div style="background-color: rgba(0, 0, 0, 0.1); border-radius: 6px; padding: 12px; display: flex; align-items: center; gap: 10px;">
            <div style="font-size: 24px;">📋</div>
            <div>What information should different transactions require?</div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 203,
    title: "CBDCs and Privacy",
    subtitle: "The future of government-issued digital money",
    description: "Understand how Central Bank Digital Currencies might affect financial privacy.",
    simulationType: 'cbdc',
    content: `
      Asha visits the Citadel's central bank, where officials are developing the next generation of the city's 
      digital currency system. Here she learns about Central Bank Digital Currencies (CBDCs) and their implications for privacy.

      ## What Are CBDCs?

      CBDCs (Central Bank Digital Currencies) are digital versions of national currencies, issued and regulated by a nation's central bank. 
      
      ### In Everyday Terms:
      
      Imagine if your country's paper money (like dollars, naira, or shillings) became completely digital, but unlike private 
      cryptocurrencies like Bitcoin:
      
      - It's created and controlled by your government's central bank
      - It has the same value as the physical currency
      - It's designed to work within the existing financial system
      - It can be programmed with specific rules and conditions
      
      ### Real-Life Examples:
      
      - **Nigeria's eNaira** - Africa's first CBDC, launched in 2021, allows citizens to make digital payments directly through the central bank
      - **China's Digital Yuan** - Being tested in major cities, allowing payment via mobile apps and even without internet connection
      - **Ghana's e-Cedi** - In development to improve financial inclusion and reduce the costs of cash
      
      ## How CBDCs Would Affect Your Daily Life
      
      If your country adopted a CBDC, your daily financial activities might change in these ways:
      
      ### Shopping and Payments
      - Pay for groceries directly from your government digital wallet
      - No need for cash or private payment apps
      - Instant settlements with no transaction fees (potentially)
      - Merchants receive payment immediately
      
      ### Receiving Money
      - Government benefits deposited directly to your CBDC wallet
      - Paycheck instantly available without a bank
      - Family remittances arriving instantly with minimal fees
      - Automatic tax adjustments on income
      
      ### Financial Management
      - All transactions automatically recorded and categorized
      - Digital trail of all purchases and income
      - Simplified tax filing as the system tracks everything
      - Potential spending limits or restrictions on certain items
      
      ## What Makes CBDCs Different From Current Digital Money
      
      CBDCs aren't just mobile money or banking apps. They represent a fundamental change in how money works:
      
      | Current Digital Money | Central Bank Digital Currency |
      |-----------------------|-------------------------------|
      | Run by private companies | Created and controlled by government |
      | Uses commercial bank money | Direct claim on the central bank |
      | Limited programmability | Can be fully programmable |
      | Separate systems that don't always connect | Single unified system |
      | Usually requires bank account | Could work without banks |
      | Transactions can take days to settle | Instant settlement possible |
      
      ## Potential CBDC Features
      - **Programmability**: Money with conditions (can only be spent on food or expires after 3 months)
      - **Automation**: Automatic tax collection, welfare distribution, or fine payment
      - **Direct control**: Monetary policy applied instantly to all citizens
      - **Offline functionality**: Works even without internet access
      - **Detailed tracking**: Complete visibility of all financial activity
      - **Targeted distribution**: Send money only to specific regions or demographics
      - **Remote control**: Ability to freeze funds or reverse transactions
      
      ## Privacy Implications
      
      Through simulation exercises, Asha explores how CBDCs could be designed with different privacy features, 
      from completely transparent to partially private transactions.
      
      ### Benefits in Daily Life:
      - Reduced transaction costs for everyday purchases
      - No more carrying cash or worrying about theft
      - Simplified receiving of payments and government benefits
      - Easier record-keeping for personal finances
      - Protection from counterfeit money
      
      ### Privacy Concerns in Daily Life:
      - Government could see every purchase you make
      - Your spending habits could affect your "social score"
      - Funds could be frozen if you're accused of wrongdoing
      - Money could be programmed to expire or restricted to certain uses
      - Complete financial visibility to authorities
      
      ## The African Context
      
      For African nations considering CBDCs, the implications are particularly significant:
      
      - **Financial inclusion**: Bringing banking to millions of unbanked citizens
      - **Reduced corruption**: Transparent tracking of government spending
      - **Lower remittance costs**: Cheaper way to receive money from relatives abroad
      - **Currency stability**: Potential protection against inflation
      - **Sovereignty concerns**: Independence from foreign payment systems
      
      However, without strong legal protections, these systems could also enable unprecedented 
      financial surveillance and control in countries with authoritarian tendencies.
      
      ## Privacy Trade-offs

      In the simulation, Asha must balance competing concerns:

      ### Benefits
      - Reduced crime and tax evasion
      - Efficient payments and reduced costs
      - Financial inclusion for the unbanked

      ### Risks
      - Complete financial surveillance
      - Political control through financial censorship
      - Loss of private economic activity
    `
  },
  {
    id: 204,
    title: "Bitcoin's Transparency",
    subtitle: "Balancing public ledgers with pseudonymity",
    description: "Discover how Bitcoin balances transparency with pseudonymity.",
    simulationType: 'bitcoin',
    content: `
      In a hidden library beneath the Citadel, Asha meets a cryptographer who explains how Bitcoin's approach 
      to transparency and privacy differs from surveillance currencies.

      ## Transparent Yet Private?

      The cryptographer explains that Bitcoin's blockchain is completely transparent - anyone can view every transaction 
      ever made. However, these transactions are tied to pseudonymous addresses rather than personal identities.

      ### Bitcoin's Privacy Model
      - All transactions are public and verifiable by anyone
      - Addresses are pseudonymous (not directly tied to identities)
      - Users can generate new addresses for each transaction
      - No built-in surveillance or identity verification
      - Privacy is possible but requires careful practices

      Through an interactive demonstration, Asha explores the Bitcoin blockchain, examining real transactions 
      while learning about the challenges of maintaining privacy when using Bitcoin.

      ## Privacy Challenges

      The cryptographer demonstrates various ways Bitcoin addresses can be linked to real identities:

      - Exchange KYC (Know Your Customer) requirements
      - Address reuse and transaction patterns
      - Blockchain analysis and clustering techniques
      - Correlation attacks using timing and amounts

      Despite these challenges, Asha learns that Bitcoin represents a fundamental shift in the privacy model: 
      instead of authority-granted privacy that can be revoked, Bitcoin offers a base layer of pseudonymity 
      that users can enhance with proper techniques.
    `
  },

  {
    id: 206,
    title: "Self-Custody",
    subtitle: "Taking control of your financial sovereignty",
    description: "Explore why \"not your keys, not your coins\" matters for financial sovereignty.",
    simulationType: 'selfcustody',
    content: `
      At the edge of the Citadel, Asha meets a group of citizens who have rejected the city's surveillance system. 
      They teach her about self-custody - the practice of holding your own private keys rather than trusting third parties.

      ## Not Your Keys, Not Your Coins

      The group demonstrates how citizens in the Citadel who keep their money in banks or centralized services 
      are completely subject to the whims of authorities - accounts can be frozen, funds can be seized, and transactions can be blocked.

      ### Self-Custody Principles
      - Full control of your own private keys
      - No third party can access or freeze your funds
      - Independence from centralized financial surveillance
      - Personal responsibility for security
      - True financial sovereignty

      Through a practical workshop, Asha learns the basics of key management, seed phrases, hardware wallets, 
      and best practices for securing one's own bitcoin.

      ## The Sovereignty Trade-off

      Self-custody comes with both benefits and responsibilities:

      ### Benefits
      - Complete ownership of your money
      - Immunity from account freezes or censorship
      - Privacy from financial surveillance
      - Protection against third-party risk

      ### Responsibilities
      - Secure key management
      - Backup and recovery procedures
      - Protection against theft or loss
      - No "customer service" to help if mistakes are made

      Asha realizes that true financial privacy and freedom require taking personal responsibility for one's finances 
      - a concept almost forgotten in the Citadel's system of controlled convenience.
    `
  }
];