## Motivation for ModemCare

We have all experienced going to a doctor's office and filling out forms that we give to a receptionist.  This information on the forms is usually redundant, and the process for filling out the forms can be fairly time-consuming.

## What ModemCare Does

Rather than fill out redundant forms, ModemCare provides a way to store this data electronically and transfer it efficiently and securely through sound.

## Why Sound?

Many products have already been developed that attempt to do this through a RESTful web interface.  Any communication that goes over the internet is immdediately exposed to a myriad of attack vectors that can be leveraged by any hacker in places as far as China and Russia that can do a port scan.

Another alternative is NFC devices.  These have also been shown to be vulnerable as well.  Although not as easily available to hackers as a RESTful web interface, an NFC device is still vulnerable to something analogous to packet sniffing.  In addition to this, NFC devices might be inconvenient for patients and consumers.

Although transfer of data through sound has similar issues to NFC devices, it is not constantly broadcasting a signal in the way that NFC devices do.  In addition to this, a receptionist can keep a 2-way aux cable to create a completely closed network.

Not many technologies projects or products leverage the transfer of data through sound, so this app is fairly innovative in its approach to securely transferring data, and could be a good proof of concept for similar future technologies.

## The Software Stack

The patient's mobile app was implemented with Ionic, the receptionist's laptop/desktop app was implemented with Electron, and the sound communication was implemented with QuietJS.

## Potential Future Functionality

This project was primarily focused on the secure communication aspect of using electronic data storage to improve the efficiency of healthcare practitioners.
To further contribute to what ModemCare has the potential to bring to healthcare practitioners, ModemCare could be extended to integrate with Electronic Medical Records or provide more standardized and customizable forms to fit the needs of each individual practitioner.