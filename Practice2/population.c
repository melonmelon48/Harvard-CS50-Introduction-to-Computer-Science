#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // TODO: Prompt for start size
    int start;
    do
    {
        start = get_int("Starting Pop: ");
    }
    while (start < 9);
    // TODO: Prompt for end size
    int end;
    do
    {
        end = get_int("Ending Pop: ");
    }
    while (end < start);
    // TODO: Calculate number of years until we reach threshold
    int n = start;
    int years = 0;

    while (n < end)
    {
        n = n + n / 3 - n / 4;
        years++;
    }
    // TODO: Print number of years
    printf("Years: %i\n", years);
}
