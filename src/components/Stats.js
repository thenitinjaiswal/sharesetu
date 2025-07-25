export default function Stats() {
  const stats = [
    {
      number: '₹50,000 Cr+',
      label: 'Total Unclaimed',
      icon: '💰',
      color: 'from-green-500 to-emerald-600'
    },
    {
      number: '15,000+',
      label: 'Successfully Recovered',
      icon: '✅',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '99.2%',
      label: 'Success Rate',
      icon: '🎯',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '30 Days',
      label: 'Average Processing',
      icon: '⚡',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="text-center group">
          <div className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <span className="text-2xl">{stat.icon}</span>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
            {stat.number}
          </div>
          <div className="text-sm text-gray-600 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
