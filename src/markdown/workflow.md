# Workflow

## Intentions:
When you break it down to the barest level, there are two types of things in life: tangible and intangible things. In terms of my work, the tangible means building something (e.g., building a company or an application). The intangible means gaining knowledge about something (e.g., reading). In my workflow, I want to maximize both the quality AND quantity that I have for these two tasks.

So, the main goals for this workflow are to reduce the friction as much as possible to do the things I want to do (i.e., increase quantity) while constantly revising my approach to work to become more efficient at each task (i.e., increase quality)… and keep it free.

## The Tangible (a.k.a. the Work)
So, the workflow depends heavily on the type of work I’m doing. For school, the work consists mostly of trying to take notes in the most efficient way possible. Whereas outside of school, I’m mostly building projects or tinkering with some type of code. But there are some constants that are independent of whichever type of work I’m currently partaking in.

### Constants
I like to keep a lot of my workflow in my terminal (Kitty).

**Four main reasons**:
1. It's extremely fast and useful to have all of my work tools within one place and a single command away.
2. Allows me to use vim motions, which is my preferred way to navigate through things.
3. I can customize my terminal to look exactly how I want it through my configuration files.
4. Most important of all, I just think it's cool as shit. I feel like an actual giga-genius whenever I start working because I just start putting some random command in my terminal and something cool pops up.


#### Some of the most important things I use in my terminal:
**Neovim (LazyVim):**

I use nvim pretty much every day and not just for code. For example, I have integrated nvim into my note-taking, to-do lists, writing, and more. The transition from my prior methods to now has not only increased the speed at which I am able to do these tasks, but also made me more consistent in these habits as well, because I can access any of these with just a terminal command.

**To-do lists:**

As previously mentioned, I have my to-do lists in my terminal. I made a zsh function in my .zshrc file that allows me to access today’s or any of my to-do lists within one command, “td”.

Here is the script:
```zsh
function td() {
    local todo_dir="$HOME/path/to/your/todos"
    local filename=""

    # Determine filename
    if [[ -z "$1" ]]; then
        # Default to today
        filename="$(date +%Y-%m-%d).md"

    elif [[ "$1" == "tomo" || "$1" == "tmr" ]]; then
        # Tomorrow
        filename="$(date -v+1d +%Y-%m-%d).md"

    elif [[ "$1" == "yest" ]]; then
        # Yesterday
        filename="$(date -v-1d +%Y-%m-%d).md"

    elif [[ "$1" =~ ^(monday|tuesday|wednesday|thursday|friday|saturday|sunday)$ ]]; then
        # Specific day of the week
        filename="$(date -v+${1} +%Y-%m-%d).md"

    else
        # Manual name (e.g. "groceries")
        filename="$*"
        [[ "$filename" != *.md ]] && filename="${filename}.md"
    fi

    # Use a subshell to keep the current working directory unchanged
    (
        cd "$todo_dir" || { echo "Todo directory not found"; exit 1; }
        git pull
        NEOVIM_MODE=skitty nvim "$filename"

        git add .
        git commit -m "Auto save: $(date +%Y-%m-%d)"
        git push
    )
}
```

**Note:** I am using macOS, so if you are on another type of operating system, the date formatting might not work without alteration.

This script works in conjunction with skitty mode, which I have defined in my options.lua file in my nvim configurations. This script is directly inspired by [linkarzu](https://linkarzu.com/). You can find the skitty mode function along with all of my other configurations [here](https://github.com/tonylam0/dotfiles).

**Desktop Switches:**

It's very efficient to have everything in my workflow in the same place every time and within one keyboard press. 

I use *skhd* and *Karabiner-Elements* to access different desktops very easily and quickly, so I don't have to spend a long time finding where a certain application is in Mission Control. To do it, I made my caps lock key a hyper key in *Karabiner-Elements*, then mapped that hyper key combined with another key to a specific desktop in *skhd*. To keep my environment consistent, I assign tasks to designated desktops (e.g.  browser in desktop 1, Neovim in desktop 2, todos in desktop 3, etc.).

Again, you can find my configuration files [here](https://github.com/tonylam0/dotfiles).

## The Intangible (a.k.a. the Knowledge Acquisition)
Many people only focus on the active work window when it comes to productivity, but I find the "inactive" window to be just as important. I didn't notice the benefit of it until I started assigning myself a daily window where I cannot do work. In this window, I'm able to not only give myself time to mentally reset but reflect and improve on the work I have to do in the following day. This window also allows me to explore other activities or thoughts that I can't focus on while I'm working, like reading or exercising. I often find that my most creative ideas or solutions are from this time away from work.

If the main place for my work is Neovim and the terminal, the main place for my non-work is my commonplace journal and my regular journal. Both serve different purposes.

### Commonplace Journal
My commonplace journal serves as a place for me to brainstorm, put down quotes of significance, explore topics in detail, life tracker, etc. Day to day, you have so many thoughts that come and leave your brain, but if you were to write these thoughts down and have a dedicated place to explore them, you would find that there is a lot to harvest in even the simplest ideas.

I believe that for this specific use case, the physical journal is superior to a digital application. Since it is stationary, you have complete freedom to represent ideas however you want (e.g., a diagram or illustration). Also, there is a romanticism to always keeping a journal on you, which you can keep and store for your future self to look back and read on.

My specific setup is based on [Reysu's Life Tracker Journal](https://reysu.io/a-notebook-to-save-you-from-infinite-scrolling), which includes the month's goals, priorities, and habit tracker.

### Normal Journal
My normal journal is solely for me to reflect on my thoughts during the day. It gives a chronological and daily portrait of my state of mind at any particular time in my life. This habit has helped me tremendously in fleshing out my thoughts and emotions.

At the end of every month, I like to read back my journal entries to reflect on everything that has happened. Every time I do this, I find myself in a great sense of clarity and gratitude. After reading my journal entries, I set up next month's tracker in my commonplace journal.
