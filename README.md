# Magic Mirror

The Magic Mirror is a RaspberryPi-powered home assistant that functions as both a mirror and smart assistant. 

It originally began as a semester-long project for USC's electronics club, [MAKERS](https://www.facebook.com/uscmakers/). The v1.0 release of the project featured basic date/time capabilities, as well as weather API integration. Since then, we've continued to keep up production and work on new features. Building the mirror has been both an exciting project and a fun way to learn web development. 

# Hardware

The hardware of the mirror is relatively simple. We used a [22-inch Sceptre Monitor](https://www.amazon.com/Sceptre-E225W-1920-Screen-LED-Lit-Monitor/dp/B00S8W8Z5E). We with this one because both the HDMI and power ports face to the sides, which allows for a thinner mirror and better cable management. 

The "mirror" effect is achieved by placing a [one-way mirror] (http://www.tapplastics.com/product/plastics/cut_to_size_plastic/two_way_mirrored_acrylic/558) in front of the LCD monitor. Any light from the monitor screen will shine through the mirror, giving it the illusion that there is illuminated text "floating" on the mirror. 

After removing the plastic casing for the monitor, we used pine wood to build a wooden frame. The wooden frame holds both the monitor and the one-way mirror in place. We attached the RaspberryPi and monitor controller box to the back of LCD monitor via heavy-duty velcro strips, and used tape to fit the rest of the wiring. Finally, we used a [two-way power splitter](https://www.amazon.com/Cables-Unlimited-PWR-PSLIB-2-Xtender-Splitter/dp/B000234UFG/ref=sr_1_1?s=hi&ie=UTF8&qid=1482628532&sr=1-1&keywords=two+way+power+splitter) so that we could power both the monitor and RaspberryPi with only one power outlet connection.

For the [v1.0 release](https://github.com/Jamin-Chen/magic-mirror/tree/v1.0), we were able to successfully run the mirror software on the [RaspberryPi 1 Model B](https://www.raspberrypi.org/products/model-b/) without overheating and performance issues. However, for future updates, we may need to upgrade our RaspberryPi to support more complex operations.

# Software

Project inspired by Michael Teeuw's original [MagicMirror](http://michaelteeuw.nl/post/84026273526/and-there-it-is-the-end-result-of-the-magic).
