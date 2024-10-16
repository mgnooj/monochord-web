---
sidebar_position: 30
---

# Synth

![Microton Synth Interface](/img/microton_synth_interface.png)

Dive into the Microton's flexible synthesis module.

## Overview: Subtractive Synthesis

Like many analog-inspired synths, the Microton can be broken down into four parts:

    - Oscillator(s): The component that emits a sound wave.
    - Filter: The component that modifies the sound wave's audible signals.
    - Filter modifier: A component which optionally makes programmatic modifications to the Filter.
    - Amplitude envelope: A component which modifies a signal's amplitude, or volume.

## Oscillator

Morphing oscillator:

    - 0% = wave
    - 33% = wave
    - 67% = wave
    - 100% = wave

Control settings in between these values represent a custom wave interpolating the two basic waves. For example, a setting of 50% is a wavetable representing [-----]???

The Microton features two different oscillator circuits: one monophonic, the other polyphonic.

The Monophonic circuit has two morphing oscillators: the Main Oscillator and the Sub Oscillator.

The Polyphonic circuit has six morphing oscillators, all controlled by a single oscillator control section.

## Filter

70's inspired low-pass filter. Cutoff (20 hz - 12000 hz) and resonance controls.

## LFO

The Low-Frequency Oscillator (LFO) controls a single Filter parameter by modifying the value of the parameter with values derived from a waveform. This waveform shape can be fine-tuned by the LFO's Frequency and Amplitude controls.

    - For example, an LFO set to the Filter Cutoff paramter, Sine wave, Frequency at 10% and Amplitude at 5% will result in a slow and steady treble roll-off. If we move the Frequency and Amplitude closer to 100%, we will get a fast tremolo effect.

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
|---------|-------|
| 20 | Waveform |
| 21 | Amplitude |
| 22 | Sub Waveform |
| 23 | Sub Amplitude |
| 24 | Sub Octave |
| 25 | Cutoff |
| 26 | Resonance |
| 27 | LFO On/Off |
| 28 | LFO Wave |
| 29 | LFO Frequency |
| 30 | LFO Amplitude |
| 31 | Attack |
| 32 | Decay |
| 33 | Sustain |
| 34 | Release |
| 35 | Glide |
| 36 | Poly Waveform |
| 37 | Poly Amplitude |
| 38 | Poly Attack |
| 39 | Poly Decay |
| 40 | Poly Sustain |
| 41 | Poly Release |
| 42 | Polyphony On/Off |
