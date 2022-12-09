---
title: Better Digital Mapping
subtitle: Dynamic design mapping in 2022
desc: "The bread and butter of service design and other design thinking exercises is mapping systems of one form or another, but there hasn't been a digital tool for these quick mapping exercises that can match the speed and utility of post-its and butchers paper, I'm looking at ways to do this better"
ready: true
layout: '_layouts/Post.astro'
image: './icon.svg'
date: 2022-08-17
---

# We Need to Talk about Digital Design Maps

## Intro: Maps, Diagrams, Oh My

Service blueprints, Journey Maps, Stakeholder and Systems diagrams, Mind Maps, We love a good visual tool in Service Design. Something to take the complex, multifaceted systems and services we explore and analyse every day and turn them into something *everyone* can understand. When I did my first service design course at Uni, the majority of the deliverables resolved around presenting a system and proposed service using these tools. They truely are the bread and butter of the field, but I think they suck, at least in their current form. My problems with these documents can be distilled down to three different areas: *Visual diagrams are too static*, *Visual diagrams are Inaccessible*, and *Visual Diagrams are too hard to create and edit*.

## Design Diagrams are too Static, Why not be Dynamic?

I've seen beautiful diagrams in my days. I remember seeing a remarkable journey map of how a single fine can travel through the Victorian legal system that filled a room, and brilliant service blueprints and systems maps of different legal services and systems within them. However, with changes to all our systems since the pandemic, many of these documents will be inaccurate. If they were accurate in the first place. These are beautiful, well-made depictions of complexity, but as static graphics, they are purely for consumption. It would be a significant process to modify any of them. They would have to be redesigned if new elements were added, and then new pdfs or vector graphics, or even new raster renders or prints would need to be made. Suddenly, you have the problem of versions and masters to maintain. These issues massively increase the cost of having these diagrams as research tools as they become out of date quickly, and if they're updated regularly, their design can make it difficult to see what's changed and measure progress.

There are also opportunities in digitisation that haven't been explored. A few years ago while I was learning about how neural networks work, I became interested in how their structures were similar in many ways to those of the journey maps I created in my work. All decisions had branching pathways to some probabilistic end. I started thinking about how computational decision makers would parse journey maps, and how you could visualise a neural network almost as a series of touch-points. Around the same time, I was studying complex social systems and social network theory for my honours degree. I was interested in the ways these systems were being recorded and visualised as systems thinking was becoming a bigger and bigger part of design, but it was often very visually-oriented. Having methods for recording this kind of information in [serialisable](https://en.wikipedia.org/wiki/Serialization) ways (Serialisable is a computing term for data that can be stored, transferred and reconstructed into the exact same structure as before it was stored) would allow for more ways of understanding their structures, and finding similarities and connections within artefacts of different fields.

## Spacial Metaphors over Visual Ones: Design Diagrams are inaccessible

Visual diagrams clearly have a massive accessibility problem labelled right in the name: visual. Certainly, not everyone is sighted, and even among sighted people there is such a massive range of access needs that aren't adequately addressed. Not to mention issues around our understanding of visual processing and neurodiversity that we should do our best to optimise and address. While visuals may remain a key part of our trade, we will always need to address this access issue. Going digital has improved this aspect somewhat. Some services offer a level of screen reader capability, visual accessibility and contrast controls, but these are far from universally applied or understood. In most tools that do have these features, they are treated as second class user interaction paradigms, often without any kind of editing or creation functionality. I think this is unacceptable, especially as we strive for more co-design and equitable design practices.

We even struggle in the way we discuss structural aspects of these diagrams and models. We use metaphors such as colour, text size, and even font to describe information structures that could be communicated in more universally accessible ways. The namesakes for these diagrams were conceived to visualise physical spaces and objects. Why not have our tools use spatial metaphors for information, processes and complex systems? Trees, Pillars, walls, roadblocks, dead ends, we pull a lot of language from Nature and the built environment for a lot of the ways we discuss these systems, why don't we use them more in documentation, This opens up many more ways of interpreting these systems. From storytelling, to virtual worlds, soundscapes, even interactive games and toys, there are many ways of exploring systems. Even in visuals, there's a wealth of data visualisation techniques that can be applied outside the standard model of how system diagrams, journey maps, and blueprints are presented.

## Yassification not Saasification: Methods of Creating Design Diagrams are too limited

While the means of creating these diagrams has somewhat improved, I do take some issue with a lot of the tools. Most are too expensive, and many of the more traditional ones are complex behemoths that have a *big visual design vibe* to them that can be off-putting if you aren't familiar with visual design tools. 

I take quite a bit of issue with the popular tool Miro. Whilst it works quite well for a specific use cases, such as running external workshops or conversations of a transactional and temporary nature, for a few reasons it falls short. For one, accessibility aids are treated as second class interaction methods. Secondly, it's bad for storing information. There's not a lot of clarity about where data is stored, how it's stored, or what is even stored. This isn't a specific issue to Miro, either. This abstraction of files and data into the idea of the cloud has been a massive part of technology in the past decade as software moves into a service model. There are benefits to this of course, the sea of emails back and forth, of USB sticks and multiple versions of the same files was something nobody was a fan of. But giving control over the data to a separate company (with, in some cases, questionable digital security) is not a good solution to these problems. I don't believe relying on these services is worth the downsides, at least in this instance.

There's also the problem of lock in, the export options of a lot of these services are quite limited. Some options are behind specific payment levels, most of the export options are never serialisable or are rarely editable. They also often lack data on the relationships between objects. Morevover, if you have a lot of information stored in one tool, it can be very difficult to migrate that information into another one. If the cloud tool you use is bought by an immature billionaire, there might not be a lot you can do if they start to introduce changes to the service in ways you didn't expect when you started using it.

## Conclusion of Why and introduction of my standard: Dendrite

So, as you can probably imagine, I don't think we're in a good place with how we work. Not only are we poorly utilising the opportunity of digitisation of our workflows, but we are maintaining and even creating new access issues. These are a barrier for a more diverse group of designers to engage with key deliverables of our field, which I can't see as anything but toxic in the long run. And finally, having our knowledge, information, and skills be specific to particular commercial tech products and tools puts our work at risk to the whims of those companies and how they are run.

From what I can tell, many designers feel trapped in these unfit for purpose systems, but we certainly aren't alone. We are far from the first industry to grapple with these problems of accessibility and interoperability. I think there's a lot we can learn and incorporate from the way other industries have tackled these issues, and embracing open standards and free and open-source software (FOSS) might offer us a way out of this place.

This is what I want to tackle with **Dendrite:** an open interoperable text-based document format for describing and serialising system representations and processes

<!--
## Dendrite

I don't think this situation is not only poorly utilising the opportunity of digitisation of our workflows, but is dangerous, access issues are a barrier for a more diverse group of designers to engage with key deliverables of our field, and knowledge, information, and skills being exclusive, specific, and proprietary to particular tech products and tools puts our work at risk to the whims of those companies and how they are run.

We need a new way of thinking about how we produce these artefacts, and I'm trying to develop one. A file format for digital design diagrams and maps that is agnostic of the visual (or otherwise) tools that are used to create.

The requirements I set for myself are as follows:

- The format must be able to express the lions share of diagrams used in service design that consist of processes and/or elements of a system
- The format must be text based, you could create an entire diagram in the format solely by typing out the document
- The format must be free to use, be open source, and have a highly permissive license
- The format must not rely on visual language
- The format must be extendable, queryable, Serializable and templatable
-

### Inspiration, Mermaid and the Markdown Renaissance

One of the strange successes in tech of the last 20 years has been markdown, created in 2004 by John Gruber, and the late but amazing Aaron Swartz, markdown was a markup language (I'll explain in a sec) that could create formatted text with decorations, links and images, all from simple characters. If you wanted a certain line to be a heading, you could put a \# before it, you could use asterisks like quote marks to indicate whether something was bold or italic, wanted to create dot points, just precede the dot points with a dash and a space. Markdown text was easily readable and writable as source code, or as the rendered formatted text, and it has become very popular

A lot of communication systems (like discord and slack for instance) use it for formatting for messages (teams kind of does, but also doesn't it's just one of those ambiguous teams things we all try to avoid), Notion and Obsidian use it, and it's quite standard for blogs at this point, and there are dozens and dozens of free and paid ways to read, write, edit, convert, render and do what ever you want with markdown, because it's open, and it's elegant.

Markdown has also inspired other simple, legible text based syntaxes such as Fountain for writing screenplays, and Mermaid, a tool for creating technical diagrams from text. So why shouldn't there be one for design diagrams.

### Decoupling Visuals

### A Social Design World that Embraces Open-Source Software

> _This has been dropped for time and I still don't know how to write it_

## Frequently Asked questions

### But XKCD #927, Why not Extend an Existing Standard?

![Standards](https://imgs.xkcd.com/comics/standards.png "Fortunately, the charging one has been solved now that we've all standardized on mini-USB. Or is it micro-USB? Shit.")

So in many ways I'd argue there isn't a standard/format, at least an open source one, that I'm aware of, If someone wants to inform me of one that meets then I will certainly stand corrected. There are things like UML, which is kind of different, and I think serves a different purpose then what I want to propose, same with the previous mentioned Mermaid (although that is far closer). I do hope to be able to create a format that gets enough popularity to be acknowledged by a lot of the design and information tools people use (even if that's just at a having a plugin level)

### Kumu

### Does Anyone in Design Care?

## Dendrite: The Draft Standard

### Built on KDL Document Language

### System Vs Process

### Nodes

### Decorators

#### Types

### Relationships

### Groups

### Serials

### Manifolds

### Perspectives

## Future Possibilities

### Messaging and Pattern Matching

### Data conscious Design

## What Next, and a Request for Help
-->
