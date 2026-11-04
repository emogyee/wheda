import React, { useState } from "react";

function App() {
  const hourlyForecast = [
    { time: "3 PM", icon: "☁️", temp: 20 },
    { time: "4 PM", icon: "🌤️", temp: 20 },
    { time: "5 PM", icon: "☀️", temp: 20 },
    { time: "6 PM", icon: "☁️", temp: 19 },
    { time: "7 PM", icon: "🌧️", temp: 18 },
    { time: "8 PM", icon: "🌫️", temp: 18 },
    { time: "9 PM", icon: "🌧️", temp: 17 },
    { time: "10 PM", icon: "☁️", temp: 17 },
  ];

  const dailyForecast = [
    { day: "Tue", icon: "🌧️", high: 20, low: 14 },
    { day: "Wed", icon: "🌧️", high: 21, low: 15 },
    { day: "Thu", icon: "☀️", high: 24, low: 14 },
    { day: "Fri", icon: "🌤️", high: 25, low: 13 },
    { day: "Sat", icon: "⛈️", high: 21, low: 15 },
    { day: "Sun", icon: "🌧️", high: 25, low: 16 },
    { day: "Mon", icon: "🌫️", high: 24, low: 15 },
  ];
  const [cityInput, setCityInput] = useState("Lagos");
  function handleSearch(e){
    e.preventDefault();
  }

  return (
    <div className="min-h-screen bg-[#050426] text-white">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-8 md:px-10">
        <h1 className="flex items-center gap-3 text-xl font-bold">
          <span className="text-3xl text-orange-400">✺</span>
          SkyCast
        </h1>

        <button className="rounded-lg bg-[#252543] px-4 py-3 text-sm text-slate-200">
          ⚙ Units⌄
        </button>
      </nav>

      <main className="mx-auto max-w-7xl px-5 pb-10 md:px-10">
        { /* Heading */}
        <header className="mb-10 mt-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How’s the sky looking today?
          </h2>
        </header>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="mx-auto mb-9 flex max-w-2xl gap-3"
        >
          <input
            type="text"
            placeholder="⌕  Search for a place..."
            className="min-w-0 flex-1 rounded-xl border border-white/5 bg-[#252543] px-5 py-4 text-sm outline-none placeholder:text-slate-300 focus:border-indigo-400"
          />

          <button
            type="submit"
            className="rounded-xl bg-indigo-600 px-5 py-4 text-sm font-medium transition hover:bg-indigo-500"
          >
            Search
          </button>
        </form>

        {/* Main Dashboard */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Column */}
          <div className="min-w-0 space-y-6 lg:col-span-2">
            {/* Current Weather */}
            <section className="relative flex min-h-64 flex-col justify-between overflow-hidden rounded-2xl bg-linear-to-br from-indigo-500 via-indigo-700 to-violet-800 p-6 sm:flex-row sm:items-center sm:p-8">
              <div className="pointer-events-none absolute -bottom-20 -right-8 h-56 w-56 rounded-full bg-violet-500/20 blur-2xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold">Lagos, Nigeria</h3>

                <p className="mt-2 text-sm text-indigo-100">Current weather</p>
              </div>

              <div className="relative z-10 mt-8 flex items-center gap-4 sm:mt-0">
                <span className="text-5xl sm:text-6xl">☀️</span>

                <span className="text-6xl font-semibold tracking-tight sm:text-7xl">
                  30°
                </span>
              </div>
            </section>

            {/* Weather Details */}
            <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-white/5 bg-[#252543] p-4">
                <p className="text-sm text-slate-300">Feels Like</p>
                <p className="mt-4 text-2xl">33°</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-[#252543] p-4">
                <p className="text-sm text-slate-300">Humidity</p>
                <p className="mt-4 text-2xl">75%</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-[#252543] p-4">
                <p className="text-sm text-slate-300">Wind</p>
                <p className="mt-4 text-2xl">12 km/h</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-[#252543] p-4">
                <p className="text-sm text-slate-300">Precipitation</p>
                <p className="mt-4 text-2xl">0 mm</p>
              </div>
            </section>

            {/* Daily Forecast */}
            <section className="pt-3">
              <h3 className="mb-5 font-semibold">Daily forecast</h3>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
                {dailyForecast.map( (day) => (
                  <div
                    key={day.day}
                    className="rounded-xl border border-white/5 bg-[#252543] px-3 py-4 text-center"
                  >
                    <p className="text-sm text-slate-300">{day.day}</p>

                    <p className="my-5 text-2xl">{day.icon}</p>

                    <div className="flex justify-between gap-2 text-xs">
                      <span>{day.high}°</span>
                      <span className="text-slate-400">{day.low}°</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Hourly Forecast */}
          <aside className="min-w-0 rounded-2xl bg-[#252543] p-5">
            <div className="mb-5 flex items-center justify-between gap-3">
              <h3 className="font-semibold">Hourly forecast</h3>

              <select
                className="max-w-28 rounded-lg bg-[#393957] px-3 py-2 text-sm outline-none"
                defaultValue="Today"
              >
                <option>Today</option>
                <option>Tomorrow</option>
              </select>
            </div>

            <div className="space-y-3">
              {hourlyForecast.map((hour) => (
                <div
                  key={hour.time}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-[#30304d] px-4 py-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{hour.icon}</span>
                    <span className="text-sm">{hour.time}</span>
                  </div>

                  <span className="text-sm">{hour.temp}°</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
