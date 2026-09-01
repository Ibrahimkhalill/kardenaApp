# Kardena — Health Tracking App

An Expo / React Native app that pairs with a smartwatch and tracks vitals: heart rate, blood oxygen, blood pressure, sleep and daily steps.

## Screens

**Onboarding** (`app/screen/home/`) — personal information, gender, date of birth, height and weight pickers, health goals and health journey setup.

**Dashboard** (`app/screen/dashboard/`)

| Screen | Tracks |
|---|---|
| `HealthDashboard.js`, `Dashboard.js` | Combined overview |
| `HeartRateScreen.js` | Heart rate |
| `SpO2Screen.js` | Blood oxygen |
| `BPScreen.js` | Blood pressure |
| `SleepScreen.js`, `SleepCard.js` | Sleep |
| `StepsScreen.js` | Daily steps |
| `SmartWatchScreen.js`, `SmartWatchScreenpair.js` | Device pairing |

**Account** (`app/screen/profile/`) — profile, device connection, general settings, FAQ, help & support, terms and conditions, logout.

**Auth** (`app/screen/authentication/`) — signup, login, OTP verification, forgot/reset password.

## Stack

- Expo + React Native
- React Navigation (bottom tabs, drawer, native stack)
- `axios` for API calls, `@react-native-async-storage/async-storage` for local persistence
- `@react-native-community/datetimepicker` and `slider` for the onboarding pickers
- NativeWind / Tailwind (`tailwind.config.js`)
- EAS Build (`eas.json`), Firebase (`google-services.json`)

## Getting started

Requires Node 20+ and the Expo tooling.

```bash
yarn install
yarn start            # Expo dev server
```

Then `yarn android`, `yarn ios` or `yarn web`.

## Notes

- Point the axios base URL at your own backend before running.
- `google-services.json` is committed. If it belongs to a real Firebase project, rotate it and keep it out of version control.
