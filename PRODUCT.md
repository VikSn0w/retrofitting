# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain static HTML, CSS and a little JavaScript, no build step. Served by GitHub Pages at https://viksn0w.github.io/retrofitting/ (repository `VikSn0w/retrofitting`).

## Users

Owners and tinkerers of PowerPC Macs running Mac OS X 10.3 to 10.5 ("Aqua" era) or Mac OS 9 ("Classic"), who want modern things such as LocalSend file sharing on their old machines. They arrive from the GitHub repo, retro-Mac forums or word of mouth, scan fast, and need to know: does it run on my Mac, where do I get it, is it safe.

## Product Purpose

"Retrofitting" is Vittorio Picone's (GitHub: VikSn0w) project to collect apps that bring modern functionality to old Macs. The page is the front door: it presents each app, per era, with honest status, requirements and download links. Success: a visitor with the right Mac finds the right build and installs it.

## Positioning

Built to run on the real hardware (PowerPC, Open Transport, Aqua and Platinum interfaces), not emulation or web wrappers. The first app, LocalSend Retro, speaks the real LocalSend protocol, so an old Mac shows up in the official LocalSend app on phones and modern computers.

## Operating Context

Visitors often browse from the very old Mac or from a modern machine next to it, then copy files across. Releases live on GitHub (`VikSn0w/localsend-retro`, asset `LocalSend-macosx-ppc.zip` plus a `.sig` signature). The Mac OS X app updates itself from those releases; Mac OS 9 cannot (no TLS).

## Capabilities and Constraints

- LocalSend Retro, Mac OS X 10.3 to 10.5 (PowerPC): finds LocalSend devices, receives files, sends files (HTTPS to encrypted devices on 10.4 and later, plain HTTP on 10.3), editable device name, About window, signed auto-update. Tested only on Mac OS X 10.5 Leopard so far; 10.3 and 10.4 builds are untested.
- LocalSend Retro, Mac OS 9: written, receives from any LocalSend device, sends only to devices with encryption turned off. Source package exists; it has not yet been built or run on real hardware.
- No first release is published yet. Download buttons must say so until a release exists.
- Not affiliated with LocalSend. Project is MIT licensed.

## Brand Commitments

Name: Retrofitting. The two eras the user pinned: Mac OS X "Aqua" (pinstripes, gel buttons) and Mac OS 9 "Classic" (Platinum bevels). Product name used on the page: LocalSend Retro. Do not use Apple logos or trademarked artwork.

## Evidence on Hand

- App icons drawn for the project: `localsend-retro/assets/aqua-512.png` (Aqua) and the Mac OS 9 pixel icon (`assets/os9/os9-preview.png`).
- Real feature set and status as listed above; repo https://github.com/VikSn0w/localsend-retro.
- Absent, must not be fabricated: real screenshots of the apps on real Macs, user counts, testimonials, download numbers, release dates, other projects.

## Product Principles

1. Say plainly what works today and what is only planned.
2. Every claim is something the visitor can verify on GitHub.
3. The two eras are equals; neither is a downgrade of the other.
4. Safe by default: signed updates and an open source repository are part of the pitch.
