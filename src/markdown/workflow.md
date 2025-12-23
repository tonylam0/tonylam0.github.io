# Workflow

##### Table of Contents:

- [Intentions](#intentions)
- [Work](#work)
- [Constants](#constants)
- [Terminal](#some-of-the-most-important-things-i-use-in-my-terminal)
- [Non-terminal](#non-terminal)
- [Note-taking](#note-taking)
- [Coding](#coding)

<br />

## Intentions
When you break it down to the barest level, there are two types of things: the tangible and the intangible. In terms of my work, the tangible means building something (e.g., building a company or an application). The intangible means gaining knowledge about something (e.g., learning about data structures). In my workflow, I want to maximize both the quality AND quantity of these two tasks.

So, the main goals for this workflow are to reduce the friction as much as possible in doing these two tasks (i.e., increase quantity) while constantly revising my approach to work to become more efficient at each task (i.e., increase quality)...and keep it free.

<br />

## Work
So, my workflow depends heavily on the type of work I’m doing. For school, the work consists mostly of trying to take notes in the most efficient way possible. Whereas outside of school, I’m mostly building projects or tinkering with some type of code. But there are some constants that are independent of whichever type of work I’m currently partaking in.

### Constants
I like to keep a lot of my workflow in my terminal (Kitty).

##### Four main reasons:
1. It's extremely fast and useful to have all of my work tools within one place and a single command away.
2. It allows me to use vim motions, which is my preferred way to navigate through things.
3. I can customize my terminal to look exactly how I want it through my configuration files.
4. Most important of all, I just think it's cool as shit. I feel like an actual giga-genius whenever I start working because I have the ability to rapid-fire commands in my terminal to pull up anything I need.


#### Some of the most important things I use in my terminal:

<br />

##### Neovim (LazyVim):

I use nvim pretty much every day and not just for code. For example, I have integrated nvim into my note-taking, to-do lists, writing, and more. The transition from my prior methods to now has not only increased the speed at which I am able to do these tasks, but also made me more consistent in these activities as well because I can access any of them with just a terminal command.

Another very big plus for working in Neovim is its ability to easily create snippets, which allows me to write much faster. For example, let's say I'm writing in markdown; I can simply press "b", hit enter, and [LuaSnip](https://github.com/L3MON4D3/LuaSnip) automatically writes "\*\*\*\*" and places my cursor in the middle. Little things like this make writing much easier and more fun.

<br />

##### To-do lists:

As previously mentioned, I have my to-do lists in my terminal. I made a Zsh function in my .zshrc file that allows me to access today’s or any of my to-do lists within one "td" command.

Here is the script:
```zsh
function td() {
    local todo_dir="$HOME/path/to/your/todos" # <--- Edit this path
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
        # Manual name (e.g., "groceries")
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
###### Scroll if needed

**Note:** I am using macOS, so if you are on another type of operating system, the date formatting might not work without alteration.

This script works in conjunction with "skitty mode," which I have defined in my options.lua file in my Neovim configurations. The Zsh function launches Neovim in skitty mode, which my config detects to automatically apply the simplified interface and keymaps.

Skitty mode script (directly inspired by [linkarzu](https://linkarzu.com/)):

```
-- Read the environment variable set by the "td" Zsh function
vim.g.neovim_mode = vim.env.NEOVIM_MODE

if vim.g.neovim_mode == "skitty" then
  vim.opt.laststatus = 0
  vim.opt.statusline = "%m"
  vim.opt.number = false
  vim.opt.signcolumn = "no"
  vim.opt.textwidth = 80

  -- Changes the top of the bar to have the file name (date)
  vim.opt.winbar = "%{expand('%:t:r')}"

  vim.keymap.set("n", "o", function()
    local line = vim.api.nvim_get_current_line()
    -- If current line is a task (starts with - [ ]), add a new one below
    if line:match("%- %[.%]") then
      return "o- [ ] "
    else
      return "o"
    end
  end, { expr = true })

  -- Auto-create new task when pressing 'Enter' in Insert Mode
  vim.keymap.set("i", "<CR>", function()
    local line = vim.api.nvim_get_current_line()
    if line:match("%- %[.%]") then
      return "<CR>- [ ] "
    else
      return "<CR>"
    end
  end, { expr = true })

  vim.keymap.set("n", "<CR>", function()
    local line = vim.api.nvim_get_current_line()
    local changed_line = line

    if line:match("%- %[ %]") then
      changed_line = line:gsub("%- %[ %]", "- [x]") -- If line is unchecked, check it
    elseif line:match("%- %[x%]") then
      changed_line = line:gsub("%- %[x%]", "- [ ]") -- If line is checked, check it
    end

    vim.api.nvim_set_current_line(changed_line)
  end)

  local function to_do_template()
    -- Uncomment the date lines if you want to include date at the top
    -- local date = os.date("%A, %B %d, %Y") -- Ex. "Friday, November 21, 2025"
    local template = {
      -- date,
      "- [ ] ",
    }

    vim.api.nvim_buf_set_lines(0, 0, -1, false, template)

    local last_line = vim.api.nvim_buf_line_count(0)
    vim.api.nvim_win_set_cursor(0, { last_line, 6 }) -- Puts cursor at first task box
    vim.cmd("startinsert!") -- Exclamation mark sets cursor after character
  end

  vim.api.nvim_create_autocmd({ "BufNewFile", "BufReadPost" }, {
    pattern = "*.md",
    callback = function()
      if vim.api.nvim_buf_line_count(0) == 1 and vim.api.nvim_get_current_line() == "" then
        to_do_template()
      end
    end,
  })
end
```
###### Scroll if needed

My to-do list directory is also contained within my Obsidian vault, which is synced across all of my devices through the Git community plugin, so I can access my to-dos anywhere. 

You can find the skitty mode function along with all of my other configurations [here](https://github.com/tonylam0/dotfiles).

<br />

##### Writing
For some types of note-taking and prose, I have incorporated Neovim with the [*Goyo*](https://github.com/junegunn/goyo.vim) and [*Limelight*](https://github.com/junegunn/limelight.vim) plugins into my workflow to help me write with vim motions and without distractions.

<br />

#### Non-terminal:

<br />

##### YPT (Yeolpumta)
I have used YPT to track my studying/work since late 2024. I mostly use its Pomodoro timer to control my focus and break times during my work sessions.

<br />

##### Desktop Switches:

It's very efficient to have everything in my workflow be in the same place all the time and bound to a keyboard shortcut.

I use *skhd* and *Karabiner-Elements* to access different desktops very easily and quickly, so I don't have to spend a long time finding where a certain application is in Mission Control. To do it, I made my caps lock key a hyper key in *Karabiner-Elements*, then mapped that hyper key, combined with another key, to a specific desktop in *skhd*. To keep my environment consistent, I assign tasks to designated desktops (e.g., browser in desktop 1, Neovim in desktop 2, todos in desktop 3, etc.).

Again, you can find my configuration files [here](https://github.com/tonylam0/dotfiles).

<br />

##### Commonplace Book

My commonplace journal serves as a place for me to brainstorm, put down quotes of significance, explore topics in detail, track my life, etc. Day to day, you have so many thoughts that enter and leave your mind. If you were to write these thoughts down and have a dedicated place to explore them, you would find that there is a lot to harvest from even the simplest ideas.

I believe that for this specific use case, a physical journal is superior to a digital application. Since it is stationary, you have complete freedom to represent ideas however you want (e.g., a diagram or illustration). Also, there is a romanticism to always keeping a journal on you, which you can keep and store for your future self to look back and read.

Oftentimes, I am revamping or optimizing my routine in this book with the *Socratic Method*. I start with a central goal or question, such as "How do I read more books?" and follow it with a series of questions like "Why do you want to read?" or "When should you read?" Through this process, I am able to flesh out my *why* and *how* for my workflow.

My specific setup is based on [Reysu's Life Tracker Journal](https://reysu.io/a-notebook-to-save-you-from-infinite-scrolling), which includes the month's goals, priorities, and habit tracker.


<br />

### Note-taking
Again, my form of note-taking depends heavily on the current subject. But I have found that regardless of the note-taking form, the most important part is that I am giving myself time and space to organize and process the information in my own way. If I just simply copy the lecture slides or resources word-for-word, then I will not be able to retain anything.

For more conceptual notes, I usually draw mind maps on my iPad through the Concepts app. Mind maps allow me to express my thoughts much more freely than linear note-taking, so this works perfectly for more conceptual topics. I really like the Concepts app specifically because of its infinite canvas and the fact that it's free.

For more general uses, I usually take notes within Obsidian. I love the backlinking system because it allows me to connect many different notes easily.

**Experimental (12/23/25)**: I am currently experimenting with taking notes with LaTeX. The main reason is its immense customizability, which is hard to find in other digital note-taking forms. I first got inspired after seeing this [video](https://www.youtube.com/watch?v=DOtM1mrWjUo) by *SeniorMars*, and I was wowed by the beauty of his notes, so I am trying to incorporate it myself.

<br />

### Coding
As I have mentioned earlier, I use Neovim as my primary text editor. On my computer, I usually use three desktops for coding purposes. 

The first desktop is Firefox, which usually has Gemini or some type of documentation pulled up. My Firefox has the Vimium C extension installed, so I am able to navigate my browser with vim motions as well. Honestly, I do mostly use my mouse to navigate the web, but there are some keybinds in Vimium C that are extremely useful, like "gi" which focuses on the main search box on the page or "gg" which scrolls to the top of the page. 

The second desktop is my Neovim window.

The third desktop is Google Chrome with my computer's localhost whenever I'm testing a frontend. I use Google Chrome to keep my development testing separate from my main browsing, so it stays even if I close out of Firefox.

Outside of my computer, if I need to conceptualize something or draw something out, I do it in my commonplace book.

<br />
---
