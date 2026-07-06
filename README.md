# TeploED

Greenhouse dashboard prototype for monitoring sensor values and testing simple control flows.

This repository belongs to the IoT / greenhouse automation part of the portfolio. It focuses on the user-interface side of monitoring and control: showing values clearly and simulating actions before connecting real hardware.

## Problem

Before building a full greenhouse automation system, it is useful to prototype the interface and control logic separately from real devices.

A dashboard should make it easy to see:

- current temperature
- humidity
- light level
- soil moisture
- heating state
- watering state
- lighting state
- possible manual actions

## Solution

`TeploED` is a lightweight browser dashboard prototype for greenhouse monitoring and basic control scenarios.

## What it does

- Displays greenhouse metrics such as temperature, humidity, light, and soil moisture
- Simulates hardware actions like heating, lighting, and watering
- Provides a dashboard-style interface for testing the control flow
- Helps evaluate layout and UX before connecting sensors and devices

## Prototype workflow

```text
Mock sensor values
   ↓
Dashboard cards
   ↓
User control actions
   ↓
Simulated hardware state
   ↓
Future real ESP32 / Home Assistant integration
```

## Good for

- quick UI prototyping
- greenhouse control ideas
- dashboard layout experiments
- demoing monitoring views without real hardware connected
- planning future ESP32 / MQTT / Home Assistant flows

## Run

Open `greenhouse.html` directly in a browser or serve the folder locally.

```bash
python3 -m http.server
```

## Why this project matters

This project supports the larger greenhouse automation direction. It shows the interface layer that can later sit on top of real sensor data and control actions.

It demonstrates:

- dashboard thinking
- greenhouse monitoring UX
- control-flow prototyping
- practical interface-first development

## Next improvements

- [ ] Add screenshots
- [ ] Add real sensor payload examples
- [ ] Add MQTT topic plan
- [ ] Add Home Assistant integration notes
- [ ] Add mobile layout improvements
- [ ] Add alert/threshold mockups
- [ ] Link this repo to the larger `teplica` case study

## Target portfolio roles

This project supports positioning for:

- IoT Dashboard Developer
- Internal Tools Developer
- Technical Product Engineer
- Greenhouse Automation Prototyper
