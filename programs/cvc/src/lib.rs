use anchor_lang::prelude::*;

declare_id!("CSuQ2ipcHn3BbZNJDCjgwoyTRL2BpjroVseHC4U4BAHr");

#[program]
pub mod cvc {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, vote_account_bump: u8) -> Result<()> {
        ctx.accounts.vote_account.bump = vote_account_bump;
        Ok(())
    }
    pub fn vote(ctx: Context<Vote>,crunch_or_smooth: bool) -> Result<()>{
        if crunch_or_smooth{
            ctx.accounts.vote_account.crunchy += 1; 
        }
        else{
            ctx.accounts.vote_account.smooth += 1;
        }
        Ok(())  
    }
}

#[derive(Accounts)]
#[instruction(vote_account_bump: u8)]
pub struct Initialize<'info> {
    #[account( init , payer = authority, space = VoteState::LEN, seeds = [b"cvc".as_ref()], bump)]
    vote_account: Account<'info,VoteState>,
    #[account(mut)]
    authority: Signer<'info>,
    system_program: Program<'info,System>,
}

#[derive(Accounts)]
pub struct Vote<'info>{
    #[account(mut, seeds = [b"cvc".as_ref()], bump = vote_account.bump)]
    vote_account: Account<'info,VoteState>,
}

#[account]
#[derive(Default)]
pub struct VoteState{
    crunchy: u64,
    smooth: u64,
    bump: u8,
}

impl VoteState{
    const LEN: usize = 8+8+8+1;
}