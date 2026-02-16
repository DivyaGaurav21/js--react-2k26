// app/dashboard/layout.tsx

export default function DashboardLayout({
  children,
  analytics,
  team,
  notifications
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <h1>Dashboard</h1>
      
      {/* Main content */}
      <div className="main-content">
        {children}
      </div>
      
      {/* Parallel slots rendered together */}
      <div className="grid grid-cols-3 gap-4">
        <div className="analytics-section">
          {analytics}
        </div>
        
        <div className="team-section">
          {team}
        </div>
        
        <div className="notifications-section">
          {notifications}
        </div>
      </div>
    </div>
  );
}