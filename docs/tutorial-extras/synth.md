---
sidebar_position: 30
---

# Synth

![Microton FM Interface](/img/fm_synth_interface.png)

Dive into the Microton FM's flexible synthesis module.

## Overview: FM Synthesis

Like most synths, the Microton FM can be broken down into four parts:

    - Oscillator(s): The component that emits a sound wave.
    - Filter: The component that modifies the sound wave's audible signals.
    - Filter modifier: A component which optionally makes programmatic modifications to the Filter.
    - Amplitude envelope: A component which modifies a signal's amplitude, or volume.

## FM Operators

FM stands for 'frequency modulation'. The basic building block of an FM synth is an 'operator', which consists of at least two oscillators called the 'carrier' and 'modulator'. The modulator oscillator produces a frequency which is then fed into the carrier. The interaction of the two signals produces a new frequency. Simple in conception, FM synthesis allows for an incredibly diverse range of sounds unattainable via analog-style subtractive synthesis.

Microton FM features two operators running in parallel. There are two modes for programming these operators: the default, which provides a ratio knob that controls the ratio of the modulating signal frequency to the carrier frequency, and an index knob which controls the amount of modulation on the carrier frequency. The ratio knob's settings are listed in the following table.

| Knob | Ratio |
|------|-------|
| 0.0 | [1.0, 1.0] |
| 1.0 | [1.0, 4.0 / 3.0] |
| 2.0 | [1.0, 1.5] |
| 3.0 | [1.0, 2.0] |
| 4.0 | [1.0, 2.5] |
| 5.0 | [1.0, 3.0] |
| 6.0 | [1.0, 3.5] |
| 7.0 | [1.0, 4.0] |
| 8.0 | [1.0, 5.0] |
| 9.0 | [2.0, 3.0] |
| 10.0 | [2.0, 4.0] |
| 11.0 | [2.0, 5.0] |
| 12.0 | [2.0, 7.0] |
| 13.0 | [3.0, 4.0] |
| 14.0 | [3.0, 5.0] |
| 15.0 | [4.0, 5.0] |
| 16.0 | [5.0, 6.0] |
| 17.0 | [6.0, 9.0] |
| 18.0 | [7.0, 8.0] |
| 19.0 | [7.0, 9.0] |
| 20.0 | [8.0, 11.0] |


By clicking the button next to the ratio knob, the Microton will display text fields for the carrier and modulator frequencies, which users can edit directly.

## Filter

The filter section contains two separate filters: 70's inspired low-pass filter, with cutoff 20 hz - 12000 hz, and a high-pass filter, with a cutoff range of 12000hz to 24000hz.

## Envelope

The Amplitude Envelope allows us to shape the amplification of each note.

## Keyboard interface

Selecting any of "Micro", "Piano", or "Strip" from the Interface menu will access the virtual Keyboard interface. This is an on-screen MIDI keyboard capable of triggering any of the notes from your current tuning. Each interface responds to the Element Styling of the currently loaded tuning.

The "Micro", or Microtonal, interface is highly customizable in its keyboard layout: see Styling for more information.

## Presets

The Synth module has its own Preset section, distinct from the Tuning presets. Save, delete, and load synth patches all require just a few clicks.

Synths can be saved at any time by pressing the "Save" button and entering a name for the patch. Note that saving a synth patch with the same name as an existing patch will result in the existing patch being overwritten.

To delete a synth patch, first load the patch from the patches menu, and then press Delete.

## Mono/Poly switch

Switch between modes with single voice and six independent voices.

## MIDI controls

In standalone mode, Microton FM automatically maps MIDI controls to its parameters. The following table lists the parameter and its respective MIDI CC value.

| MIDI CC | Param |
|------|-------|
| 20 | Waveform 1 |
| 21 | Amplitude 1 |
| 22 | Mod Ratio 1 |
| 23 | Mod Index 1 |
| 24 | High Cut 1 |
| 25 | High Res 1 |
| 26 | Low Cut 1 |
| 27 | Low Res 1 |
| 28 | Attack 1 |
| 29 | Decay 1 |
| 30 | Sustain 1 |
| 31 | Release 1 |
| 32 | Glide 1 |
| 33 | Waveform 2 |
| 34 | Amplitude 2 |
| 35 | Mod Ratio 2 |
| 36 | Mod Index 2 |
| 37 | High Cut 2 |
| 38 | High Res 2 |
| 39 | Low Cut 2 |
| 40 | Low Re2 |
| 41 | Attack 2 |
| 42 | Decay 2 |
| 43 | Sustain 2 |
| 44 | Release 2 |
| 45 | Glide 2 |
| 46 | Polyphony |
