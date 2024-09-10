---
sidebar_position: 20
---

# Tuning

Shape and experiment with your instrument's tuning.

## Basics: the Element

The basic building block of a tuning is an Element. An Element represents a single note from your Tuning.

Every Tuning has at least two elements:

   - A root element. The root element represents the frequency from which your tuning will be calculated. By extension, the frequency of the root element is the basis of the ratio for all of the other elements.

   For example, a Just Intonation with a root element with frequency 440 khz (i.e. modern A natural) would have an element with frequency 660 khz (i.e. E natural) as its seventh element, as the ratio 3:2 is equal to 660:440.

   - An 'octave' element. This element represents the point at which the tuning repeats.

   Continuing with the example of Just Intonation with root 440 khz, our 'octave' would be the twelfth element with a frequency of 880 khz, as the ratio 2:1 is equal to 880:440.

   Note that we use the term 'octave' for historical convenience. There is no restriction on the ratio on which the 'octave' is based. For example, in the Shi'er Lu tuning, the 'octave' element's ratio is equal to . Thus, if we calculate a Shi'er Lu tuning with a root element equal to frequency 440 khz, our tuning repeats at . (For other examples of acyclical tunings, see the Carlos Alpha, Beta, and Gamma tunings created by composer Wendy Carlos.)

A Tuning can have any number of elements greater than two. Note that the MIDI standard limits the number of accessible notes to 128 at any given frame (see the MIDI Transpose control to learn how to control the instrument's coverage of a tuning.) 

The currently selected Tuning will be mapped to MIDI controls with note 60 (traditionally C4, or middle C) as the root element.

## The Monochord

The Monochord is a visual representation of your Tuning. Each element is represented as a node on the Monochord, located at its respective distance from the root element. 

The tuning dashboard is a text representation of your Tuning. Each column in the table contains Frequency, Cents (from the root), and the Ratio (from the root) for the respective Element.

Clicking or tapping on any element transforms the tuning dashboard into the Element Editor. The editor displays the various properties of the Element -- fundamental frequency ratio/cents from root, ratio/cents from previous element in tuning -- all of which can be modified by clicking on the field.

The Element Editor also has a second section, where you can modify the style properties of the element. Selecting a color for the element will change the color of the respective Node on the Monochord (and, if applicable, the respective keys on the Virtual Keyboard.) Users can also store custom names for the element, as well as define the appearance of the key in the "Microtonal" interface (equivalent to making the selected element a White key or a Black key on the virtual keyboard.)

The Element Editor accepts mathematical expressions as input. For example, users can set the ratio of the Octave element of a tuning to either 2.1, 1.05*2, 10.5/5 -- all of these would be equivalent. This is particularly useful for tunings that use logarithms and exponents to derive its element's ratios.

Valid mathematical symbols:
   - Arithmetical operations: +, -, /, *, ^ (exponent, e.g.: 3^2 == three squared)
   - functions: log, sin, cos, tan, etc.
   - constants: pi, e, 

## Tuning toolbar

The Tuning toolbar provides the user with high-level options to interact with the current Tuning.

The drop-down Tuning menu provides a list of all preset and user-defined tunings. Selecting one will load the selected tuning. (Note that all current settings will be lost.) Any modifications to a loaded tuning will immediately create a new Tuning named "Custom.

To the left of the Tuning menu is the Delete/Save Tuning button. Delete will only appear when a Tuning has been loaded. Users can only delete user-defined tunings.

To the right of the Tuning menu is the Cents / Ratio toggle. Selecting this button will cause the Monochord display to draw the elements of the Tuning by cents (i.e. the equal-interval logarithmic unit) or by mathematical ratio. Toggling between cents and ratio does not modify any instrument data.

The last button in the toolbar is the Add Element button. Selecting this button and inputting a value (in cents or ratio) will create a new Element at that value in the current Tuning. Note that like the Element Editor, this value accepts mathematical expressions as input.